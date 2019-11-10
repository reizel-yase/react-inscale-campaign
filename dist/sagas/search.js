"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const types = require("../action/types");
function* fetchSuggestions(action) {
    try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${action.search}&key=AIzaSyBiAJBK9gGHhTW1-TAdCczJ2Sf1maih8ZQ`;
        const response = yield effects_1.call(fetch, proxyUrl + targetUrl, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        const data = yield effects_1.call([response, response.json]);
        yield effects_1.put({
            type: types.FETCH_RESULTS_SUCCESS,
            results: data.predictions
        });
    }
    catch (err) {
        yield effects_1.put({
            type: types.FETCH_RESULTS_ERROR,
            error: err,
        });
    }
}
function* search() {
    yield effects_1.all([
        effects_1.takeLatest(types.FETCH_RESULTS, fetchSuggestions)
    ]);
}
exports.default = search;
//# sourceMappingURL=search.js.map