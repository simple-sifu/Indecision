console.log("app.js is running")

// JSX - Javascript XML
//var template = <p>This is JSX from app.js !</p>;

var template = React.createElement(
    'p',
    {id: 'someid'},
    "This is JSX from app.js"
);
var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot)