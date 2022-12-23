import { lazy } from "react";

const AccountList = lazy(() => import("./AccountList"));

const AccountListContainer = () => {
  return <AccountList />;
};
export default AccountListContainer;
