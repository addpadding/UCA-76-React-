var number = 0;

var increase = () => {
    number++;
    console.log("number", number)
    render()
}

function render() {
    var ele = (
        <div>
            the number {number}
            <button onClick={increase}> add one </button>
        </div>
    );

    ReactDOM.render(ele, document.getElementById("app"))
}
render();