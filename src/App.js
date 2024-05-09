import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



// restaurent information in card...

const AppLayout = () => {
  return (
    <div className="app">
    
      <Header></Header>
      <Body></Body>
      {/* body */}
      {/* footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout></AppLayout>);
