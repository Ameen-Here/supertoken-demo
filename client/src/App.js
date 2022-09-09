import "./App.css";
import Homepage from "./components/Homepage";
import Header from "./components/Header";

import { Route } from "react-router-dom";
import Secret from "./components/Secret";
import Login from "./components/Login";

export function getApiDomain() {
  const apiPort = process.env.REACT_APP_API_PORT || 3001;
  const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
  const websiteUrl =
    process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;
  return websiteUrl;
}

function App() {
  return (
    <>
      <Header />
      <Route path={"/"} exact>
        <Homepage />
      </Route>
      <Route path={"/login"}>
        <Login />
      </Route>
      <Route path={"/secret"}>
        <Secret />
      </Route>
    </>
  );
}

export default App;
