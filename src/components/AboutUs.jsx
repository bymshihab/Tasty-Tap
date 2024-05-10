import User from "./User";
import UserClass from "./UserClass";


const AboutUs = () => {
  return (
    <div>
      <h1>This is about page</h1>
      <User name={"Shihab(from function)"}></User>
      <UserClass name={"shihab(from Class)"} location={"Dhaka, Bangladesh"}></UserClass>
    </div>
  );
};

export default AboutUs;
