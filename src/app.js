console.log("app.js is running")

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// preventDefault prevents a screen refresh which will occur for form submits
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = ''
        renderOption()
    }

};

const onRemoveAll = (e) => {
    app.options = [];
    renderOption()
};

// use reference onFormSubmit instead of onFormSubmit() because that would return undefined.
const appRoot = document.getElementById('app');


// create render function that renders the new jsx
// call it right away
// call it after options array added to

// create "Remove All" button above list
// on click -> wipe the array -> rerender

const renderOption = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length}</p>
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderOption();
