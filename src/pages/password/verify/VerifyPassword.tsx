import { Fragment } from "react";

const VerifyPassword = () => {
  return (
    <Fragment>
      <h2 className="card-title fw-bolder mb-1">Xác thực Email ✉️</h2>
      <p className="card-text mb-2">
        Chúng tôi đã gửi mật khẩu mới về địa chỉ: <span className="fw-bolder">thang.pc@beetechsoft.com</span>. Vui lòng kiểm tra và không
        tiết lộ với bất kì ai
      </p>
      <a href="index.html" className="btn btn-primary w-100">
        Trở về màn hình đăng nhập
      </a>
      <p className="text-center mt-2">
        <span>Bạn chưa nhận được email? </span>
        <div className="btn-link">
          <span>&nbsp;Thử lại</span>
        </div>
      </p>
    </Fragment>
  );
};
export default VerifyPassword;
