import React from "react";
import logo from "./logo.svg";

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img className="App-logo" src={logo} alt="react-logo" />
      </header>
    );
  }
}
