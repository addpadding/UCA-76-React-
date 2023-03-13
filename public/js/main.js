"use strict";

// var myInputValue;

// var allItem = [];

// $("").toggle()

// var handelInputChange = (e) => {
//     myInputValue = e.target.value
// }

// var handelFormsSubmit = (e) => {
//     e.preventDefault();
//     allItem.push(myInputValue)
//     console.log(allItem)
//     e.target.elements[0].value = "";
//     render()
// }


// function render() {

//     let content = (
//         <div>

//             <form onSubmit={handelFormsSubmit} >
//                 <input type="text" onChange={handelInputChange} />
//                 <input type="submit" />
//             </form>

//             <ul>
//                 {
//                     allItem.length ? allItem.map((item) => <li> {item} </li>) : ""
//                 }

//             </ul>

//         </div>
//     )

//     ReactDOM.render(content, document.getElementById("app"))

// }
// render()

var toggle = false;

var toggleText = function toggleText() {
    toggle = !toggle;
    render();
};

function render() {
    console.log(toggle);

    var content = React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: toggleText },
            " toggle text "
        ),
        toggle ? React.createElement(
            "p",
            null,
            " this is text "
        ) : ""
    );

    ReactDOM.render(content, document.getElementById("app"));
}
render();
