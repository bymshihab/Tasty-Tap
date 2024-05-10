// It's a normal JS class. Where class extends to react component and render method inside class that return JSX which will be convert into html and display it into webpage.

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,
      count2: 1,
    };

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    // console.log(`${this.props.child} child constructor`);
  }
  async componentDidMount() {
    // console.log(`${this.props.child} child componentDidMount`);

    const data = await fetch("https://api.github.com/users/bymshihab");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // console.log(`${this.props.child} child render`);
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    

    return (
      <div className="user-card">
        <img className="img-profile" src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Address: {location}</h3>
        <h3>Contact: +8801990637762</h3>
      </div>
    );
  }
}

export default UserClass;
