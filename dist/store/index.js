"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_saga_1 = require("redux-saga");
const reducers_1 = require("../reducers");
const sagas_1 = require("../sagas");
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
const sagaMiddleware = redux_saga_1.default();
const middlewares = redux_1.applyMiddleware(sagaMiddleware);
const store = redux_1.createStore(reducers_1.default, composeEnhancers(middlewares));
sagaMiddleware.run(sagas_1.default);
exports.default = store;
//# sourceMappingURL=index.js.map