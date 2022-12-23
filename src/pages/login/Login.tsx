import { useNavigate } from "react-router-dom";
import { Eye } from "react-feather";
import { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { onBlur } from "../../utils/helpers";
import { useTranslation } from "react-i18next";
import { FormFeedback } from "reactstrap";
import { EMAIL_REGEX } from "../../constants/validation";

interface IProps {
  isTypePassword: boolean;
  toggleTypePassword: () => void;
  onSubmit: () => void;
}

const Login = (props: IProps) => {
  const { isTypePassword, toggleTypePassword, onSubmit } = props;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <Fragment>
      <h4 className="card-title mb-1">Chào mừng bạn tới với Genji! 👋</h4>
      <p className="card-text mb-2">Hãy đăng nhập để bắt đầu trải nghiệm !</p>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-login-form mt-2 mb-2">
        <div className="mb-1">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="genji@example.com"
            tabIndex={1}
            autoFocus={true}
            {...register("email", {
              required: {
                value: true,
                message: t("message.validation.required", {
                  name: "E-mail",
                }),
              },
              pattern: {
                value: new RegExp(EMAIL_REGEX),
                message: t("message.validation.email"),
              },
            })}
            onBlur={(e) => {
              onBlur(e.currentTarget.name, e.currentTarget.value, setValue);
            }}
          />
          {errors.email && <FormFeedback className="d-block">{String(errors.email.message)}</FormFeedback>}
        </div>
        <div className="mb-1">
          <div className="d-flex justify-content-between">
            <label className="form-label" htmlFor="login-password">
              Mật khẩu
            </label>
            <span className="btn-link" onClick={() => navigate("/reset-password")}>
              <small>Quên mật khẩu?</small>
            </span>
          </div>
          <div className="input-group input-group-merge form-password-toggle">
            <input
              type={isTypePassword ? "password" : "text"}
              className="form-control form-control-merge"
              tabIndex={2}
              placeholder="············"
              {...register("password", {
                required: {
                  value: true,
                  message: t("message.validation.required", {
                    name: "Mật khẩu",
                  }),
                },
                minLength: {
                  value: 8,
                  message: t("message.validation.min", { name: "Mật khẩu", min: 8 }),
                },
              })}
            />
            <span className="input-group-text cursor-pointer" onClick={toggleTypePassword}>
              <Eye size={14} />
            </span>
          </div>
          {errors.password && <FormFeedback className="d-block">{String(errors.password.message)}</FormFeedback>}
        </div>
        <div className="mb-1">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="remember-me" tabIndex={3} />
            <label className="form-check-label" htmlFor="remember-me">
              Nhớ mật khẩu
            </label>
          </div>
        </div>
        <button className="btn btn-primary w-100" tabIndex={4}>
          Đăng nhập
        </button>
      </form>
    </Fragment>
  );
};
export default Login;
