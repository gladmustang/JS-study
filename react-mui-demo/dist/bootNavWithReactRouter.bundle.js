webpackJsonp([3],{

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(110);

__webpack_require__(132);

var _reactRouterDom = __webpack_require__(210);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav(props) {
        _classCallCheck(this, Nav);

        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Nav, [{
        key: 'handleClick',
        value: function handleClick(e) {
            $(e.target).parent().siblings().removeClass("active");
            $(e.target).parent().addClass("active");
        }
    }, {
        key: 'render',
        value: function render() {
            var Home = function Home() {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Home'
                    )
                );
            };

            var About = function About() {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'About'
                    )
                );
            };

            var Topics = function Topics() {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Topics'
                    )
                );
            };

            return _react2.default.createElement(
                _reactRouterDom.HashRouter,
                null,
                _react2.default.createElement(
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
                                    _react2.default.createElement(
                                        'li',
                                        { onClick: this.handleClick },
                                        _react2.default.createElement(
                                            _reactRouterDom.NavLink,
                                            { to: '/' },
                                            'Home'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { onClick: this.handleClick },
                                        _react2.default.createElement(
                                            _reactRouterDom.NavLink,
                                            { to: '/about' },
                                            'About'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { onClick: this.handleClick },
                                        _react2.default.createElement(
                                            _reactRouterDom.NavLink,
                                            { to: '/topics' },
                                            'Topics'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Home }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: About }),
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/topics', component: Topics })
                )
            );
        }
    }]);

    return Nav;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Nav, null), document.getElementById("root"));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ })

},[450]);
//# sourceMappingURL=bootNavWithReactRouter.bundle.js.map