import { lazy } from "react";

const Home = lazy(() => import("./Home"));

const HomeContainer = () => {
  return <Home />;
};
export default HomeContainer;
