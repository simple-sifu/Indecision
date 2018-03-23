// Create three methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor
class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }


    handleAddOne() {
        console.log("handle Add One")
    }

    handleMinusOne() {
        console.log("handle Minus One")
    }

    handleReset() {
        console.log("handle Reset")
    }

    render(){
        return (
            <div>
                <h1>Counter: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}





ReactDOM.render(<Counter />, document.getElementById('app') )


// let count = 0

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };


// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}> +1 </button>
//         <button onClick={minusOne}> -1 </button>
//         <button onClick={reset}>Reset </button>
//         </div>
//     )

//     ReactDOM.render(template2, appRoot);

// }

// renderCounterApp();