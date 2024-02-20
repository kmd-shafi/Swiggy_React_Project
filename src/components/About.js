import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/Usercontext";
class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>This is About page 🦁</h1>
        <div>
          LoggedIn User
          <UserContext>
            {({ loggedInuser }) => (
              <h className=" text-xl font-bold"> {loggedInuser} </h>
            )}
          </UserContext>
        </div>
        <UserClass />
      </div>
    );
  }
}
export default About;
