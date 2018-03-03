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

ReactDOM.render(template2, appRoot);