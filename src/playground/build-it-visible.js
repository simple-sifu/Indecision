
const toggleVisibility = (e) => {
    visibility = !visibility
    renderVisibility()
}

let visibility =  false;


const renderVisibility = () => {
    const template2 = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVisibility}>
             {visibility ? "hide Details" : "show Details" }
        </button>
        {visibility && <p>{"Hey. These are some details you need to see"}</p>}
        </div>
    )

    ReactDOM.render(template2, document.getElementById('app'));

}

renderVisibility();