import { lazy, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { finalize, map } from "rxjs";
import { VERIFY_CODE_API } from "../../constants/api";
import { CHANGE_PASSWORD_FIRST_TIME_URL } from "../../constants/url";
import { useAuth } from "../../hook/useAuth";
import { useHttp } from "../../hook/useHttp";
import { createParametersRequest, saveAccountInfo } from "../../utils/sessionStorageHelper";

const VerifyLoginCode = lazy(() => import("./VerifyLoginCode"));

const VerifyLoginCodeContainer = () => {
  const methods = useForm({
    mode: "all",
    reValidateMode: "onBlur" || "onSubmit" || "onChange",
  });
  const { getValues } = methods;
  const http = useHttp();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setAuth } = useAuth();

  const onSubmit = useCallback(() => {
    const parameters = {
      loginCode: getValues("loginCode"),
    };

    const s = http
      .post(VERIFY_CODE_API, createParametersRequest(parameters))
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
          saveAccountInfo(response.data.account);
          setAuth({ account: response.data.account, isAuthenticated: true });
          if (response.account.isLoginFirstTime) {
            navigate(CHANGE_PASSWORD_FIRST_TIME_URL);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }, [getValues, t, http, navigate, setAuth]);

  return (
    <FormProvider {...methods}>
      <VerifyLoginCode onSubmit={onSubmit} />
    </FormProvider>
  );
};
export default VerifyLoginCodeContainer;
