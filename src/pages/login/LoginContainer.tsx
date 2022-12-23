import { lazy, useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { finalize, map } from "rxjs";
import { LOGIN_API } from "../../constants/api";
import { VERIFY_LOGIN_CODE_URL } from "../../constants/url";
import { useHttp } from "../../hook/useHttp";
import { createParametersRequest, saveAccessToken } from "../../utils/sessionStorageHelper";

const Login = lazy(() => import("./Login"));

const LoginContainer = () => {
  const methods = useForm({
    mode: "all",
    reValidateMode: "onBlur" || "onSubmit" || "onChange",
  });
  const { getValues } = methods;
  const http = useHttp();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isTypePassword, setTypePassword] = useState(true);

  const onSubmit = useCallback(() => {
    const parameters = {
      email: getValues("email"),
      password: getValues("password"),
    };

    const s = http
      .post(LOGIN_API, createParametersRequest(parameters))
      .pipe(
        map((response: any) => {
          if (response.code !== 200) {
            throw new Error(t("message.server_error"));
          }
          return response;
        }),
        finalize(() => {
          s.unsubscribe();
        }),
      )
      .subscribe({
        next: (response: any) => {
          if (response.data.token) {
            saveAccessToken(response.data.token);
            navigate(VERIFY_LOGIN_CODE_URL, { state: { email: getValues("email") } });
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }, [getValues, t, http, navigate]);

  return (
    <FormProvider {...methods}>
      <Login isTypePassword={isTypePassword} toggleTypePassword={() => setTypePassword(!isTypePassword)} onSubmit={onSubmit} />
    </FormProvider>
  );
};
export default LoginContainer;
