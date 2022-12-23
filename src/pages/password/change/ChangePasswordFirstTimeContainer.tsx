import { lazy } from "react";

const ChangePasswordFirstTime = lazy(() => import("./ChangePasswordFirstTime"));

const ChangePasswordFirstTimeContainer = () => {
  return <ChangePasswordFirstTime />;
};
export default ChangePasswordFirstTimeContainer;
