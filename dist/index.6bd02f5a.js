/**
 *  <div id="parent">
     <div id="child">
        <h1>I am h1 Tag</h1>
     </div>
 * </div>
 * 
 * 
 * 
 * 
 * */ // with siblings...  
imp;
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h1", {}, "I am h1 Tag")
]));
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello world");
// createElement takes 3 things "tag, {all atribute like id:"asdh"}, text or what will be show inside of DOM"
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
