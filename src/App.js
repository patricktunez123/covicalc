import React, { Fragment, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Spin } from "antd";

const Home = React.lazy(() => import("./views/home"));
const Error404 = React.lazy(() => import("./views/error404"));

function App() {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              width: "100%",
              textAlign: "center",
              paddingTop: "calc(50vh - 7px)",
            }}
          >
            <Spin />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default App;
