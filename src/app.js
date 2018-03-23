// To make components more dynamic we need to use component Props.
class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        return (
            <div>
                <Header title={title}/>
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {
    render() {
        // component will convert parameter being passed in as object props with key-value pair
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
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