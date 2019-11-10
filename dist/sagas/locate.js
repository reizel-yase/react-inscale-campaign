"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const types = require("../action/types");
function* locatePlace(action) {
    try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${action.place}&key=AIzaSyBiAJBK9gGHhTW1-TAdCczJ2Sf1maih8ZQ`;
        const response = yield effects_1.call(fetch, proxyUrl + targetUrl, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        const data = yield effects_1.call([response, response.json]);
        yield effects_1.put({
            type: types.FETCH_PLACE_SUCCESS,
            results: data.result.geometry.location
        });
    }
    catch (err) {
        yield effects_1.put({
            type: types.FETCH_PLACE_ERROR,
            error: err,
        });
    }
}
function* locate() {
    yield effects_1.all([
        effects_1.takeLatest(types.FETCH_PLACE, locatePlace)
    ]);
}
exports.default = locate;
//# sourceMappingURL=locate.js.map