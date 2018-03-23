
// React Components are ES6 class that inherits React.Components.
// React Components must use UpperCase names otherwise it will not render the component. React tries to figure
// out if something is a component or HTML.
// There are two global pkgs - React, ReactDOM
// render is a method with no arguments that returns jsx. It is required when extending React.Component.
//


// Replacing JSX Constant with React Component in Renderer.

class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>"What should I do?"</button>
            </div>
        );
    }
}

// Options -> Options Component here

// Always start off with this.....
//
//  return (
//      <div>
//          Add Option Component here
//      </div>
//  );

class Options extends React.Component {
    render() {
        return (
            <div>
                Options Component here
                <Option />
            </div>
        );
    }
}

// AddOption -> AddOption Component here

class AddOption extends React.Component {
    render() {
        return (
            <div>
                Add Option Component here
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                Put Option Here
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))