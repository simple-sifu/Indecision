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
    handlePick(){
        alert('handle Pick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>"What should I do?"</button>
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
// Component Props is a one-way pass.

// Add Remove All button
// Setup handleRemoveAll -> alert some message
// setup onClick to fire the method

class Options extends React.Component {

    handleRemoveAll(){
        alert("Handle Remove All");
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>RemoveAll</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

// 1. Setup the form with Text Input and submit Button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value then alert

class AddOption extends React.Component {
    onFormSubmit(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim();
        if (option){
            alert("onSubmit");
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))