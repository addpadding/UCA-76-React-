"use strict";

var number = 0;

var increase = function increase() {
    number++;
    console.log("number", number);
    render();
};

function render() {
    var ele = React.createElement(
        "div",
        null,
        "the number ",
        number,
        React.createElement(
            "button",
            { onClick: increase },
            " add one "
        )
    );

    ReactDOM.render(ele, document.getElementById("app"));
}
render();
