import React from "react";
import "./homepage.styles.scss";

import { HomePageContainer } from "./homepage.styles";
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  // <div className="homepage">
  <HomePageContainer>
    <Directory />
  </HomePageContainer>

  // </div>
);

export default HomePage;
