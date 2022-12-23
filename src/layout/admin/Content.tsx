import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div className="app-content content ">
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <div className="content-wrapper">
        <Suspense fallback={<h6>Loading</h6>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default Content;
