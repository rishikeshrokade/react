// firstChild-> JS object
const firstChild = React.createElement(
    "h1",
    { id: "heading" },
    "Welcome To React"
);

// rootElement-> JS object
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

//render-> is responsible for creating node from JS object
rootElement.render(firstChild);
