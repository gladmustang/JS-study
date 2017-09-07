webpackJsonp([2],{

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(110);

__webpack_require__(344);

var _MuiThemeProvider = __webpack_require__(181);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _AppBar = __webpack_require__(201);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = __webpack_require__(60);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FontIcon = __webpack_require__(88);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _close = __webpack_require__(607);

var _close2 = _interopRequireDefault(_close);

__webpack_require__(444);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleTouchTap() {
    console.log(this);
    alert('onClick triggered on the title component');
}

var styles = {
    title: {
        cursor: 'pointer'
    },
    iconRight: {
        paddingTop: "12px",
        color: "white",
        cursor: 'pointer'
    }
};

var App = function App() {
    return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(_AppBar2.default, {
            title: _react2.default.createElement(
                'span',
                { style: styles.title },
                'Title'
            ),
            onTitleTouchTap: handleTouchTap
            // iconClassNameRight="fa fa-bell"
            , iconElementRight: _react2.default.createElement(
                _FontIcon2.default,
                { className: 'material-icons', style: styles.iconRight },
                'home'
            ),
            iconElementLeft: _react2.default.createElement(
                _IconButton2.default,
                null,
                _react2.default.createElement(_close2.default, null)
            ),
            onRightIconButtonTouchTap: handleTouchTap
        })
    );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("root1"));

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(21);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(20);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationClose = function NavigationClose(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' })
  );
};
NavigationClose = (0, _pure2.default)(NavigationClose);
NavigationClose.displayName = 'NavigationClose';
NavigationClose.muiName = 'SvgIcon';

exports.default = NavigationClose;

/***/ })

},[244]);
//# sourceMappingURL=index.bundle.js.map