import { lazy } from "react";

const VerifyPassword = lazy(() => import("./VerifyPassword"));

const VerifyPasswordContainer = () => {
  return <VerifyPassword />;
};
export default VerifyPasswordContainer;
