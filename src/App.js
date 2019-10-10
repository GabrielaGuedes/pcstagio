import React, { Fragment } from "react";
import "./App.css";
import AvatarWithButton from "./components/ui/avatar-with-button";
import Navbar from "./components/ui/navbar";
import OurButton from "./components/ui/our-button";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="App">
        <AvatarWithButton
          src="http://placekitten.com/405/405"
          nome="Miguel Sarraf"
        />
      </div>
      <OurButton text="skansklo" />
    </Fragment>
  );
}

export default App;
