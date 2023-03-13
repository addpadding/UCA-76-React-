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

let toggle = false

var toggleText = () => {
    toggle = !toggle
    render()
}

function render() {
    console.log(toggle)

    let content = (
        <div>

            <button onClick={toggleText}> toggle text </button>
            {
                toggle ? <p> this is text </p> : ""
            }
        </div>
    )

    ReactDOM.render(content, document.getElementById("app"))

}
render()