"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = require("../types");
exports.getResults = (search) => {
    return {
        type: types.FETCH_RESULTS,
        search
    };
};
exports.getLocation = (place) => {
    return {
        type: types.FETCH_PLACE,
        place
    };
};
//# sourceMappingURL=index.js.map