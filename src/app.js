console.log("app.js is running")

var app = {
    title: 'Indecision App',
    subtitle: 'This is subtitle'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>

        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var user = {
    name: 'Andrew',
    age: 26,
    location: 'New York'
};

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);