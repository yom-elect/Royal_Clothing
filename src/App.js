import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AuthenticationPage from "./pages/Authentication/authentication.component";
import Header from "./components/header/header.component";

// state actions
import { setCurrentUser } from "./redux/action/user/user.action";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // let unsubscribeFromAuth = null;
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }
      dispatch(setCurrentUser(userAuth));
    });

    return function cleanup() {
      unsubscribeFromAuth = null;
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
