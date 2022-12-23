import { lazy } from "react";

const ResetPassword = lazy(() => import("./ResetPassword"));

const ResetPasswordContainer = () => {
  return <ResetPassword />;
};
export default ResetPasswordContainer;
