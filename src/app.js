// To make components more dynamic we need to use component Props.
class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";
        const options = ["Thing one", "Thing two", "Thing four"];
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options} />
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
                <h2>{this.props.subTitle}</h2>
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


// Setup options prop for Options component
// Render the length of the array

// Render new p tag for each option (set text, set key)

class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <p key={option}> {option} </p>)
                }
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