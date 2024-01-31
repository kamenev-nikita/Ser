import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { publicRoutes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={route.component()}
            exact={route.exact}
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
