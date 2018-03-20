console.log("app.js is running")

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

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

function getLocation(){
    if (location){
        return <p>Location: {location}</p>
    }
}

var template2 = (
    <div>
        <h1>{user.name ? user.name : "Anonymous" }</h1>
        { (user.age && user.age >= 18 ) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);