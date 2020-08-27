import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
//import { useDispatch, useSelector } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AuthenticationPage from "./pages/Authentication/authentication.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";

// state actions
//import { setCurrentUser } from "./redux/action/user/user.action";
import CurrentUserContext from "./contexts/current-user/current-user.context";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // const dispatch = useDispatch();

  // const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          // dispatch(
          //   setCurrentUser(
          //     {
          //     id: snapShot.id,
          //     ...snapShot.data(),
          //   })
          // );
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      // dispatch(setCurrentUser(userAuth));
      setCurrentUser(userAuth);
    });

    return function cleanup() {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>

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
