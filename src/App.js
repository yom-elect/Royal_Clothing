import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AuthenticationPage from "./pages/Authentication/authentication.component";
import Header from "./components/header/header.component";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // let unsubscribeFromAuth = null;
    let unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return function cleanup() {
      unsubscribeFromAuth = null;
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
