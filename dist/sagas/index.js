"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const search_1 = require("./search");
const locate_1 = require("./locate");
function* rootSaga() {
    yield effects_1.all([
        search_1.default(),
        locate_1.default()
    ]);
}
exports.default = rootSaga;
//# sourceMappingURL=index.js.map