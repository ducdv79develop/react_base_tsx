import React, { useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { history } from "./history";
import { Router } from "react-router-dom";
import "./i18n";

export interface IBrowserRouterProps {
  basename?: string;
  children?: React.ReactNode;
  window?: Window;
}

const BrowserRouter = ({ basename, children }: IBrowserRouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), []);

  return <Router basename={basename} children={children} location={state.location} navigationType={state.action} navigator={history} />;
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
