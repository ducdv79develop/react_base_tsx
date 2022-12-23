import { Home, User, Box, Activity, Package, MessageCircle } from "react-feather";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="horizontal-menu-wrapper">
      <div
        className="header-navbar navbar-expand-sm navbar navbar-horizontal floating-nav navbar-dark navbar-shadow menu-border"
        role="navigation"
        data-menu-type="floating-nav"
      >
        <div className="shadow-bottom" />
        <div className="navbar-container main-menu-content" data-menu="menu-container">
          <ul className="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="">
                <Home size={14} />
                <span data-i18n="Trang chủ">Trang chủ</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="">
                <MessageCircle size={14} />
                <span data-i18n="Trang chủ">Chat</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/admin/accounts">
                <User size={14} />
                <span data-i18n="Nhân viên">Nhân viên</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="">
                <Box size={14} />
                <span data-i18n="Dự án">Dự án</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="">
                <Package size={14} />
                <span data-i18n="Công việc">Công việc</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="">
                <Activity size={14} />
                <span data-i18n="Hoạt động">Hoạt động</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menu;
