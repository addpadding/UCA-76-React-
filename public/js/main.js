"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 79

// components

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        // inherit
        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            name: "---app comp---",
            title: "---some bla bla---"
        };

        _this.changeTitle = function () {
            _this.setState({
                title: "new title"
            });
        };

        return _this;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            console.log(this); // App

            return React.createElement(
                "div",
                { className: "app" },
                "app",
                React.createElement("br", null),
                this.state.title,
                React.createElement(
                    "button",
                    { onClick: this.changeTitle },
                    "change"
                ),
                React.createElement(AddItem, { name: "add" })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        var _this2 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this2.state = {
            name: "---Header comp---"
        };
        return _this2;
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "header",
                null,
                "header",
                this.props.item
            );
        }
    }]);

    return Header;
}(React.Component);

var ListItems = function (_React$Component3) {
    _inherits(ListItems, _React$Component3);

    function ListItems() {
        _classCallCheck(this, ListItems);

        return _possibleConstructorReturn(this, (ListItems.__proto__ || Object.getPrototypeOf(ListItems)).apply(this, arguments));
    }

    _createClass(ListItems, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "List Items Component ===",
                this.props.myTitle,
                React.createElement(Item, null)
            );
        }
    }]);

    return ListItems;
}(React.Component);

var Item = function (_React$Component4) {
    _inherits(Item, _React$Component4);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "Item"
            );
        }
    }]);

    return Item;
}(React.Component);

var AddItem = function (_React$Component5) {
    _inherits(AddItem, _React$Component5);

    function AddItem() {
        _classCallCheck(this, AddItem);

        var _this5 = _possibleConstructorReturn(this, (AddItem.__proto__ || Object.getPrototypeOf(AddItem)).call(this));

        _this5.state = {
            name: "test"
        };

        _this5.changeValue = function (e) {
            console.log(e.target.value);
            _this5.setState({
                name: e.target.value
            });
        };

        return _this5;
    }

    _createClass(AddItem, [{
        key: "render",
        value: function render() {
            console.log(this); // AddItem

            return React.createElement(
                "form",
                null,
                this.state.name,
                React.createElement("input", { type: "text", onChange: this.changeValue }),
                React.createElement("input", { type: "submit" })
            );
        }
    }]);

    return AddItem;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
