import React from "react";
import { Header, SideBar, Feed, Widget } from "../components";
import { HomeBody, HomeApp } from "./Home.elements";
const Home = () => {
  return (
    <>
      <HomeApp>
        <Header />
        <HomeBody>
          <SideBar />
          <Feed />
          <Widget />
        </HomeBody>
      </HomeApp>
    </>
  );
};

export default Home;
