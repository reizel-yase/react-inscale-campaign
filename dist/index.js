"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDom = require("react-dom");
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
const app_1 = require("./containers/app");
const ConnectedApp = react_redux_1.connect((state) => {
    return state;
})(app_1.default);
ReactDom.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(ConnectedApp, null)), document.getElementById('app'));
//# sourceMappingURL=index.js.map