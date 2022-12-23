import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <h4 className="card-title mb-1">Quên mật khẩu? 🔒</h4>
      <p className="card-text mb-2">Hãy nhập Email và chúng tôi sẽ gửi lại bạn hướng dẫn cấp lại mật khẩu</p>
      <form className="auth-forgot-password-form mt-2" action="auth-reset-password-basic.html" method="POST">
        <div className="mb-1">
          <label htmlFor="forgot-password-email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="forgot-password-email"
            name="forgot-password-email"
            placeholder="john@example.com"
            aria-describedby="forgot-password-email"
            tabIndex={1}
            autoFocus={true}
          />
        </div>
        <button className="btn btn-primary w-100" tabIndex={2}>
          Quên mật khẩu
        </button>
      </form>
      <p className="text-center mt-2">
        <span className="btn-link" onClick={() => navigate("/login")}>
          <i data-feather="chevron-left" /> Trở về màn hình đăng nhập
        </span>
      </p>
    </Fragment>
  );
};
export default ResetPassword;
