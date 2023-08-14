import React, { Component } from "react";
import Layout from "./Layout";
import SignUpForm from "./Components/SignUpForm";
import DropdownWithCheckboxes from "./Components/DropdownWithCheckboxes"

export default class extends Component {
  render() {
    return (
      <>
        {/* <Layout/> */}
        {/* <SignUpForm/> */}
        <DropdownWithCheckboxes/>
      </>
    );
  }
}
