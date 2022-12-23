import { Fragment } from "react";
import Menu from "./Menu";
import Header from "./Header";
import Content from "./Content";

const AdminLayout = () => {
  return (
    <Fragment>
      <Header />
      <Menu />
      <Content />
      <div className="sidenav-overlay" />
      <div className="drag-target" />
      <button className="btn btn-primary btn-icon scroll-top" type="button">
        <i data-feather="arrow-up" />
      </button>
    </Fragment>
  );
};
export default AdminLayout;
