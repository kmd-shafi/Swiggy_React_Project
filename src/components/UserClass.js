import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Dummy",
        following: "Defult",
        avatar_url: "img",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kmd-shafi");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { login, following, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name:{login}</h2>
        <h3>following:{following}</h3>
        <h3>Contact:shaikshafi5259@</h3>
      </div>
    );
  }
}
export default UserClass;
