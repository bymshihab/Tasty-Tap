import User from "./User";
import UserClass from "./UserClass";

import React from "react";

class AboutUs extends React.Component{

  constructor(props){
    super(props);

    console.log("parent constructor");

  }

  componentDidMount(){
    console.log("Parent componentDidMount.");
  }


  render(){
    console.log("parent Render"); 
    return(
      <div>
         <UserClass name={"shihab(from Class)"} location={"Dhaka, Bangladesh"} child={"first"}></UserClass>
    
      </div>
    )
  }
}  



// const AboutUs = () => {
//   return (
//     <div>
//       <h1>This is about page</h1>
//       <User name={"Shihab(from function)"}></User>
//       <UserClass name={"shihab(from Class)"} location={"Dhaka, Bangladesh"}></UserClass>
//     </div>
//   );
// };


export default AboutUs;
