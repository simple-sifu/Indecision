'use strict';

console.log("app.js is running");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// preventDefault prevents a screen refresh which will occur for form submits
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOption();
    }
};

var onRemoveAll = function onRemoveAll(e) {
    app.options = [];
    renderOption();
};

// use reference onFormSubmit instead of onFormSubmit() because that would return undefined.
var appRoot = document.getElementById('app');

// create render function that renders the new jsx
// call it right away
// call it after options array added to

// create "Remove All" button above list
// on click -> wipe the array -> rerender

//jsx supports numbers, strings, and arrays, but ignores objects, boolean, nulls and undefineds
var numbers = [15, 20, 25, 30];

var renderOption = function renderOption() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            /* map over app.options getting back an array of lis (set key and text) */
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option.indexOf(option) },
                    ' ',
                    option,
                    ' '
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderOption();
