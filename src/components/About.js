import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFucntionalBasedComponent from "./Profile";
import React from "react";
import userContext from "../utils/userContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - Constructer()");
  }

  componentDidMount() {
    console.log("Parent - componentDidMount()");
  }

  render() {
    console.log("Parent - render()");
    return ( 
      <div className="about-us">
        <h1>About us page</h1>

        <userContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name}-{user.gmail}
            </h4>
          )}
        </userContext.Consumer>

        <p>this is about us page for more details about us</p>

        {/* <Outlet /> */}
        {/* <ProfileFucntionalBasedComponent name={"Saksham"}/> */}
        <ProfileFucntionalBasedComponent name={"First Child"} />
      </div>
    );
  }
}

export default About;
