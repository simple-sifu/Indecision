console.log("app.js is running")

// JSX - Javascript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>

        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);
var userName = 'Andrew';
var userAge = 26;
var userLocation = 'New York'
var template2 = (
    <div>
        <h1>{userName}</h1>
        <p>Age: {userAge}</p>
        <p>Location: {userLocation}</p>

        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);
var appRoot = document.getElementById('app');


ReactDOM.render(template2, appRoot)