webpackJsonp([1],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Inner = __webpack_require__(133);

var _Inner2 = _interopRequireDefault(_Inner);

var _Inner3 = __webpack_require__(134);

var _Inner4 = _interopRequireDefault(_Inner3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jshen103 on 8/19/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Outer = function (_React$Component) {
    _inherits(Outer, _React$Component);

    function Outer(props) {
        _classCallCheck(this, Outer);

        var _this = _possibleConstructorReturn(this, (Outer.__proto__ || Object.getPrototypeOf(Outer)).call(this, props));

        _this.state = { name: "initial name" };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Outer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("mounted");
            this.setState({ name: "didMount name" });
        }
    }, {
        key: "handleClick",
        value: function handleClick() {
            this.setState({ name: Math.random() });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Inner2.default, { name: this.state.name }),
                _react2.default.createElement(
                    "button",
                    { type: "button", onClick: this.handleClick },
                    "click to change Text"
                ),
                _react2.default.createElement(
                    _Inner4.default,
                    null,
                    _react2.default.createElement(
                        "div",
                        null,
                        " haha this is in Inner2"
                    )
                )
            );
        }
    }]);

    return Outer;
}(_react2.default.Component);

exports.default = Outer;

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jshen103 on 8/19/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Inner = function (_React$Component) {
    _inherits(Inner, _React$Component);

    function Inner(props) {
        _classCallCheck(this, Inner);

        return _possibleConstructorReturn(this, (Inner.__proto__ || Object.getPrototypeOf(Inner)).call(this, props));
    }

    _createClass(Inner, [{
        key: "render",
        value: function render() {
            var list = [_react2.default.createElement(
                "div",
                { key: "1" },
                "item 1"
            ), _react2.default.createElement(
                "div",
                { key: "2" },
                "item 2"
            ), _react2.default.createElement(
                "div",
                { key: "3" },
                "item 3"
            )];
            return _react2.default.createElement(
                "div",
                null,
                "this is ",
                this.props.name,
                _react2.default.createElement(
                    "ul",
                    null,
                    list
                ),
                _react2.default.createElement("textarea", { defaultValue: "this is a text area in react" })
            );
        }
    }]);

    return Inner;
}(_react2.default.Component);

exports.default = Inner;

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jshen103 on 8/20/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Inner2 = function (_React$Component) {
    _inherits(Inner2, _React$Component);

    function Inner2(props) {
        _classCallCheck(this, Inner2);

        return _possibleConstructorReturn(this, (Inner2.__proto__ || Object.getPrototypeOf(Inner2)).call(this, props));
    }

    _createClass(Inner2, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);

    return Inner2;
}(_react2.default.Component);

exports.default = Inner2;

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(109);

__webpack_require__(135);

var _HomePage = __webpack_require__(448);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _Outer = __webpack_require__(132);

var _Outer2 = _interopRequireDefault(_Outer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav(props) {
        _classCallCheck(this, Nav);

        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

        _this.state = { Body: _HomePage2.default, activeIndex: 0 };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Nav, [{
        key: 'handleClick',
        value: function handleClick(e, index, page) {
            e.preventDefault();
            this.setState({ Body: page, activeIndex: index });
        }
    }, {
        key: 'render',
        value: function render() {
            var Body = this.state.Body;
            var activeIndex = this.state.activeIndex;
            var handleClick = this.handleClick;
            var list = [{ name: "Link0", page: _HomePage2.default }, { name: "Link1", page: _Outer2.default }, { name: "Link2", page: function page() {
                    return _react2.default.createElement(
                        'div',
                        null,
                        'Item2'
                    );
                } }, { name: "Link3", page: function page() {
                    return _react2.default.createElement(
                        'div',
                        null,
                        'Item3'
                    );
                } }, { name: "Link4", page: function page() {
                    return _react2.default.createElement(
                        'div',
                        null,
                        'Item4'
                    );
                } }, { name: "Link5", page: function page() {
                    return _react2.default.createElement(
                        'div',
                        null,
                        'Item5'
                    );
                } }];
            var ListEles = list.map(function (item, index) {
                return _react2.default.createElement(
                    'li',
                    { key: item.name, className: activeIndex == index ? "active" : "", onClick: function onClick(e) {
                            return handleClick(e, index, item.page);
                        } },
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        item.name
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'nav',
                    { className: 'navbar navbar-inverse navbar-static-top' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'navbar-header' },
                            _react2.default.createElement(
                                'a',
                                { className: 'navbar-brand', href: '#' },
                                'Home'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'collapse navbar-collapse' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'nav navbar-nav' },
                                ListEles
                            )
                        )
                    )
                ),
                _react2.default.createElement(Body, null)
            );
        }
    }]);

    return Nav;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Nav, null), document.getElementById("root"));

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage(props) {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
    }

    _createClass(HomePage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'This is the home page'
            );
        }
    }]);

    return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

/***/ })

},[447]);
//# sourceMappingURL=bootNav.bundle.js.map