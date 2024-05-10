// It's a normal JS class. Where class extends to react component and render method inside class that return JSX which will be convert into html and display it into webpage.

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1, 
            });
          }}
        >
          Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Address: {location}</h3>
        <h3>Contact: +8801990637762</h3>
      </div>
    );
  }
}

export default UserClass;
