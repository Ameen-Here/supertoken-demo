import "./App.css";
import Homepage from "./components/Homepage";
import Header from "./components/Header";

import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Secret from "./components/Secret";
import Login from "./components/Login";

import SessionExpiredPopup from "./components/SessionExpired";

import { useState } from "react";

// AUTH

import SuperTokens, {
  getSuperTokensRoutesForReactRouterDom,
  SuperTokensWrapper,
} from "supertokens-auth-react";

import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import * as reactRouterDom from "react-router-dom";

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

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: "Login Demo",
    apiDomain: getApiDomain(),
    websiteDomain: getWebsiteDomain(),
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init({
      emailVerificationFeature: {
        mode: "REQUIRED",
      },
    }),
    Session.init(),
  ],
});

function App() {
  let [showSessionExpiredPopup, updateShowSessionExpiredPopup] =
    useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const logout = () => {
    setLoggedIn(false);
  };

  const logIn = () => {
    setLoggedIn(true);
  };
  return (
    <SuperTokensWrapper>
      <Router>
        <Header loginShow={loggedIn} logout={logout} />

        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          {/* This shows the login UI on "/auth" route */}
          {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))}

          <Route
            path="/secret"
            element={
              /* This protects the "/" route so that it shows
                                    <Home /> only if the user is logged in.
                                    Else it redirects the user to "/auth" */
              <EmailPassword.EmailPasswordAuth
                onSessionExpired={() => {
                  updateShowSessionExpiredPopup(true);
                }}
              >
                <Secret loggedIn={logIn} />
                {showSessionExpiredPopup && <SessionExpiredPopup />}
              </EmailPassword.EmailPasswordAuth>
            }
          />
        </Routes>
      </Router>
    </SuperTokensWrapper>
  );
}

export default App;
