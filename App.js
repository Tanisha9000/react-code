/**
 * In order to create nested HTML structures using React.createElement.
 * e.g <div id="parent">
 *         <div id="child">
 *              <h1>Hi this is h1 tag!</h1>
 *              <h2> Hi this is h2 tag!</h2>
 *          </div>
 *          <div id="child2">
 *              <h3>Hi this is h3 tag!</h3>
 *              <h4> Hi this is h4 tag!</h4>
 *          </div>
 *     </div>
 * 
 * Syntax for React creating element
 *  const heading = React.createElement("h2", {
     "id" : "h1-element-heading", "abc":"123"
    }, "Hello from React JS");
 */


const parentEl = React.createElement("div", {id:"parent", key:"parent-div"}, 
[
    React.createElement("div", {id:"child", key:"child-key-div"}, 
    [React.createElement("h1", {key: "h1-key"}, "Hi this is an h1 tag!"),
    React.createElement("h2", {key: "h2-key"}, "Hi this is an h2 tag!")]),
    React.createElement("div", {id:"child2", key:"child2-key-div"}, 
    [React.createElement("h3", {key: "h3-key"}, "Hi this is an h3 tag!"),
    React.createElement("h4", {key: "h4-key"}, "Hi this is an h4 tag!")])
]
);

const parentE2 = React.createElement("div", {id:"parent2", key:"parent2-div"}, 
[
    React.createElement("div", {id:"child3", key:"child3-key-div"}, 
    [React.createElement("h1", {key: "h1-parent2-key"}, "Hi this is an h1 tag!"),
    React.createElement("h2", {key: "h2-parent2-key"}, "Hi this is an h2 tag!")]),
    React.createElement("div", {id:"child4", key:"child4-key-div"}, 
    [React.createElement("h3", {key: "h3-parent2-key"}, "Hi this is an h3 tag!"),
    React.createElement("h4", {key: "h4-parent2-key"}, "Hi this is an h4 tag!")])
]
);

const rootNode = ReactDOM.createRoot(document.getElementById("root"));
rootNode.render([parentEl, parentE2]);

/** React element is nothing but an object which has children as props which are being passed when ever it is created using createElement in react. Once it is created, it is rendered using render() which binds the HTML understood by browser on the DOM */