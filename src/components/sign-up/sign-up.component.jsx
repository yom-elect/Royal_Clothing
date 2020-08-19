import React, { useState } from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userInfo;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setUserInfo({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
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
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span> Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={userInfo.displayName}
          required
          label="Display Name"
          handleChange={handleChange}
        />
        <FormInput
          name="email"
          type="email"
          value={userInfo.email}
          required
          label="Email"
          handleChange={handleChange}
        />

        <FormInput
          name="password"
          type="password"
          value={userInfo.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={userInfo.confirmPassword}
          handleChange={handleChange}
          label="Confirm password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
