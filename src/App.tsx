import React, { lazy, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AuthContext, AuthData } from "./hook/useAuth";
import AdminLayoutContainer from "./layout/admin/AdminLayoutContainer";
import DefaultLayout from "./layout/default/DefaultLayout";
import { getAccountInfo } from "./utils/sessionStorageHelper";
const LoginContainer = lazy(() => import("./pages/login/LoginContainer"));
const ResetPasswordContainer = lazy(() => import("./pages/password/reset/ResetPasswordContainer"));
const VerifyLoginCodeContainer = lazy(() => import("./pages/code/VerifyLoginCodeContainer"));
const VerifyPasswordContainer = lazy(() => import("./pages/password/verify/VerifyPasswordContainer"));
const ChangePasswordFirstTimePasswordContainer = lazy(() => import("./pages/password/change/ChangePasswordFirstTimeContainer"));
const HomeContainer = lazy(() => import("./pages/home/HomeContainer"));
const AccountListContainer = lazy(() => import("./pages/account/list/AccountListContainer"));

function App() {
  const account = getAccountInfo();

  const [auth, setAuth] = useState<AuthData>({
    account,
    isAuthenticated: !!account,
  });
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="login" element={<LoginContainer />} />
          <Route path="verify-login-code" element={<VerifyLoginCodeContainer />} />
          <Route path="change-password-first-time" element={<ChangePasswordFirstTimePasswordContainer />} />
          <Route path="reset-password" element={<ResetPasswordContainer />} />
          <Route path="verify-password" element={<VerifyPasswordContainer />} />
        </Route>
        <Route path="/admin" element={<AdminLayoutContainer />}>
          <Route index element={<HomeContainer />} />
          <Route path="accounts" element={<Outlet />}>
            <Route index element={<AccountListContainer />} />
          </Route>
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
