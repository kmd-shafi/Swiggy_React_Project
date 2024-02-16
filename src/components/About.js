import React from "react";
import UserClass from "./UserClass";
class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>This is About page 🦁</h1>
        <UserClass />
      </div>
    );
  }
}
export default About;
