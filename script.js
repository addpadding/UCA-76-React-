console.log("script");

// compiler babel
let ele1 = <h1 class="x">Hello React</h1>; //- jsx


let ele2 = React.createElement(
    "h1",
    { class: "x" },
    React.createElement("span", null, "test")
);


let ele = (
    <div>
        <span>Hello</span>
        <h1>H1</h1>
    </div>
)

ReactDOM.render(ele, document.getElementById("app"))