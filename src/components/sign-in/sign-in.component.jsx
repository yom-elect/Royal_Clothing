import React, { useState } from "react";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = userInfo;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserInfo({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserInfo({
      [name]: value,
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={userInfo.email}
          required
          label="email"
          handleChange={handleChange}
        />

        <FormInput
          name="password"
          type="password"
          value={userInfo.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
