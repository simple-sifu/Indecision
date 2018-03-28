// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        // step 1 - setting default state of object
        this.state = {
            visibility: false
        }
    }


    toggleVisibility(){
        {
            this.setState((prevState) =>{
                return{
                    visibility: !prevState.visibility
                };
            })
        }
     }

    render(){



        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleVisibility}>
                 {this.state.visibility ? "hide Details" : "show Details" }
            </button>
            {this.state.visibility && <p>{"Hey. These are some details you need to see"}</p>}
            </div>
        )

    }


}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const toggleVisibility = (e) => {
//     visibility = !visibility

// }

// let visibility =  false;


// const renderVisibility = () => {
//     const template2 = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleVisibility}>
//              {visibility ? "hide Details" : "show Details" }
//         </button>
//         {visibility && <p>{"Hey. These are some details you need to see"}</p>}
//         </div>
//     )

// }

// renderVisibility();