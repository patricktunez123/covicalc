import React, { Fragment, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Spin } from "antd";
import Layout from "./components/Layout";

const Home = React.lazy(() => import("./views/home"));
const Error404 = React.lazy(() => import("./views/error404"));

function App() {
  return (
    <Fragment>
      <Suspense
        fallback={
          <Layout>
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
          </Layout>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Home />
            </Layout>
          </Route>

          <Route>
            <Layout>
              <Error404 />
            </Layout>
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default App;
