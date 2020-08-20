import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AuthenticationPage from "./pages/Authentication/authentication.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

// state actions
import { setCurrentUser } from "./redux/action/user/user.action";
function App() {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    let unsubscribeFromAuth;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
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
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/auth"
          render={() =>
            currentUser ? <Redirect to="/" /> : <AuthenticationPage />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
