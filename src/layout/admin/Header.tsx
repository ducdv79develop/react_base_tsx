import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from "reactstrap";
import { Power, User, Clock, Bell, MessageCircle } from "react-feather";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
const Header = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const current = new Date();
      const newTimeString = format(new Date(current), "dd/MM/yyyy HH:mm:ss");
      setCurrentTime(newTimeString);
    }, 1000);
    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <nav
      className="header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center"
      data-nav="brand-center"
    >
      <div className="navbar-header d-xl-block d-none">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a className="navbar-brand" href="../../../html/ltr/horizontal-menu-template-dark/index.html">
              <span className="brand-logo">
                <svg
                  viewBox="0 0 139 95"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  height={24}
                >
                  <defs>
                    <linearGradient id="linearGradient-1" x1="100%" y1="10.5120544%" x2="50%" y2="89.4879456%">
                      <stop stopColor="#000000" offset="0%" />
                      <stop stopColor="#FFFFFF" offset="100%" />
                    </linearGradient>
                    <linearGradient id="linearGradient-2" x1="64.0437835%" y1="46.3276743%" x2="37.373316%" y2="100%">
                      <stop stopColor="#EEEEEE" stopOpacity={0} offset="0%" />
                      <stop stopColor="#FFFFFF" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <g id="Artboard" transform="translate(-400.000000, -178.000000)">
                      <g id="Group" transform="translate(400.000000, 178.000000)">
                        <path
                          className="text-primary"
                          id="Path"
                          d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                          style={{ fill: "currentColor" }}
                        />
                        <path
                          id="Path1"
                          d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                          fill="url(#linearGradient-1)"
                          opacity="0.2"
                        />
                        <polygon
                          id="Path-2"
                          fill="#000000"
                          opacity="0.049999997"
                          points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                        />
                        <polygon
                          id="Path-21"
                          fill="#000000"
                          opacity="0.099999994"
                          points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                        />
                        <polygon
                          id="Path-3"
                          fill="url(#linearGradient-2)"
                          opacity="0.099999994"
                          points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <h2 className="brand-text mb-0">Genji</h2>
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-container d-flex content">
        <div className="bookmark-wrapper d-flex align-items-center">
          <ul className="nav navbar-nav">
            <li className="nav-item d-none d-lg-block">
              <span className="nav-link nav-link-style">
                <Clock size={30} /> <span>{currentTime}</span>
              </span>
            </li>
          </ul>
        </div>
        <ul className="nav navbar-nav align-items-center ms-auto">
          <UncontrolledDropdown tag="li" className="dropdown-notification nav-item mr-25">
            <DropdownToggle tag="a" className="nav-link" href="/" onClick={(e) => e.preventDefault()}>
              <MessageCircle size={21} />
              <Badge pill color="danger" className="badge-up">
                5
              </Badge>
            </DropdownToggle>
            {/* <DropdownMenu tag='ul' right className='dropdown-menu-media mt-0'>
              <li className='dropdown-menu-header'>
                <DropdownItem className='d-flex' tag='div' header>
                  <h4 className='notification-title mb-0 mr-auto'>Notifications</h4>
                  <Badge tag='div' color='light-primary' pill>
                    6 New
                  </Badge>
                </DropdownItem>
              </li>
              {renderNotificationItems()}
              <li className='dropdown-menu-footer'>
                <Button.Ripple color='primary' block>
                  Read all notifications
                </Button.Ripple>
              </li>
            </DropdownMenu> */}
          </UncontrolledDropdown>
          <UncontrolledDropdown tag="li" className="dropdown-notification nav-item mr-25">
            <DropdownToggle tag="a" className="nav-link" href="/" onClick={(e) => e.preventDefault()}>
              <Bell size={21} />
              <Badge pill color="danger" className="badge-up">
                5
              </Badge>
            </DropdownToggle>
            {/* <DropdownMenu tag='ul' right className='dropdown-menu-media mt-0'>
              <li className='dropdown-menu-header'>
                <DropdownItem className='d-flex' tag='div' header>
                  <h4 className='notification-title mb-0 mr-auto'>Notifications</h4>
                  <Badge tag='div' color='light-primary' pill>
                    6 New
                  </Badge>
                </DropdownItem>
              </li>
              {renderNotificationItems()}
              <li className='dropdown-menu-footer'>
                <Button.Ripple color='primary' block>
                  Read all notifications
                </Button.Ripple>
              </li>
            </DropdownMenu> */}
          </UncontrolledDropdown>
          <UncontrolledDropdown>
            <li className="nav-item dropdown dropdown-user">
              <DropdownToggle href="/" tag="a" className="nav-link dropdown-user-link" onClick={(e) => e.preventDefault()}>
                <div className="user-nav d-sm-flex d-none">
                  <span className="user-name fw-bolder">Phương Công Thắng</span>
                  <span className="user-status">Admin</span>
                </div>
                <span className="avatar">
                  <img
                    className="round"
                    src="../../../app-assets//images/portrait/small/avatar-s-11.jpg"
                    alt="avatar"
                    height={40}
                    width={40}
                  />
                  <span className="avatar-status-online" />
                </span>
              </DropdownToggle>
            </li>
            <DropdownMenu right>
              <DropdownItem tag={Link} to={`/login`} className="w-100">
                <User size={14} />
                <span className="align-middle mx-2">Thông tin cá nhân</span>
              </DropdownItem>
              <div className="dropdown-divider"></div>
              <DropdownItem tag={Link} to={`/login`} className="w-100">
                <Power size={14} />
                <span className="align-middle mx-2">Đăng xuất</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
