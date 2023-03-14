"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 82

// StateFull components
var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            name: "",
            option: "",
            submit: false
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "handleChange",
        value: function handleChange(e) {
            var _setState;

            console.log(e.target.id);
            this.setState((_setState = {}, _defineProperty(_setState, e.target.id, e.target.value), _defineProperty(_setState, "submit", false), _setState));
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            this.setState({
                submit: true
            });
        }
    }, {
        key: "render",
        value: function render() {
            // console.log(this.state);
            return React.createElement(
                "div",
                { className: "app" },
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit },
                    React.createElement("input", { type: "text", onChange: this.handleChange, id: "name" }),
                    React.createElement(
                        "select",
                        { onChange: this.handleChange, id: "option" },
                        React.createElement(
                            "option",
                            { value: "1" },
                            "1"
                        ),
                        React.createElement(
                            "option",
                            { value: "2" },
                            "2"
                        ),
                        React.createElement(
                            "option",
                            { value: "3" },
                            "3"
                        )
                    ),
                    React.createElement("input", { type: "submit" }),
                    this.state.submit && React.createElement(
                        "div",
                        null,
                        this.state.name,
                        this.state.option
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

// StateLess


var Item = function Item() {
    return React.createElement(
        "div",
        null,
        "item function comp"
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
