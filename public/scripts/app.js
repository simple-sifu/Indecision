"use strict";

var toggleVisibility = function toggleVisibility(e) {
    visibility = !visibility;
    renderVisibility();
};

var visibility = false;

var renderVisibility = function renderVisibility() {
    var template2 = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleVisibility },
            visibility ? "hide Details" : "show Details"
        ),
        visibility && React.createElement(
            "p",
            null,
            "Hey. These are some details you need to see"
        )
    );

    ReactDOM.render(template2, document.getElementById('app'));
};

renderVisibility();
