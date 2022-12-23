import { Fragment } from "react";

const ChangePasswordFirstTime = () => {
  return (
    <Fragment>
      <h4 className="card-title mb-1">Thay đổi mật khẩu? 🔒</h4>
      <p className="card-text mb-2">Đây là lần đầu tiên đăng nhập của bạn. Vui lòng đổi một mật khẩu mới !</p>
      <form className="auth-forgot-password-form mt-2 mb-2">
        <div className="mb-1">
          <label htmlFor="passwordOld" className="form-label">
            Mật khẩu cũ
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
        <div className="mb-1">
          <label htmlFor="passwordOld" className="form-label">
            Mật khẩu mới
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
        <div className="mb-1">
          <label htmlFor="passwordOld" className="form-label">
            Xác nhận mật khẩu mới
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
          Đổi mật khẩu
        </button>
      </form>
    </Fragment>
  );
};
export default ChangePasswordFirstTime;
