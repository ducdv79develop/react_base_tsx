import { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { FormFeedback } from "reactstrap";
import { onBlur } from "../../utils/helpers";

interface IProps {
  onSubmit: () => void;
}

const VerifyLoginCode = (props: IProps) => {
  const { state } = useLocation();
  const { onSubmit } = props;
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useFormContext();
  return (
    <Fragment>
      <h2 className="card-title fw-bolder mb-1">Nhập Mã Xác Thực 💬</h2>
      <p className="card-text mb-75">Chúng tôi đã gửi mã xác thực cho bạn. Vui lòng kiểm tra Email.</p>
      <p className="card-text fw-bolder mb-2">{state?.email}</p>
      <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
        <h6>Nhập mã xác thực gồm 4 kí tự</h6>
        <div className="auth-input-wrapper d-flex align-items-center justify-content-between">
          <input
            type="text"
            className="form-control"
            placeholder="****"
            tabIndex={1}
            autoFocus={true}
            {...register("loginCode", {
              required: {
                value: true,
                message: t("message.validation.required", {
                  name: "Mã xác thực",
                }),
              },
              minLength: {
                value: 4,
                message: t("message.validation.min", { name: "Mã xác thực", min: 4 }),
              },
            })}
            onBlur={(e) => {
              onBlur(e.currentTarget.name, e.currentTarget.value, setValue);
            }}
          />
        </div>
        {errors.loginCode && <FormFeedback className="d-block">{String(errors.loginCode.message)}</FormFeedback>}
        <button type="submit" className="btn btn-primary w-100 mt-1" tabIndex={4}>
          Xác thực
        </button>
      </form>
      <p className="text-center mt-2">
        <span>Bạn không nhận được mã xác thực?</span>
        <div className="btn-link">
          <span>&nbsp;Thử lại</span>
        </div>
      </p>
    </Fragment>
  );
};
export default VerifyLoginCode;
