"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes = require("../action/types");
const initialState = {
    results: [],
    fetching: false,
    fetched: false,
    location: {
        lat: 0,
        lng: 0
    },
    locating: false,
    located: false,
    error: ''
};
const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_RESULTS:
            return Object.assign({}, state, { fetching: true });
        case ActionTypes.FETCH_RESULTS_SUCCESS:
            return Object.assign({}, state, { fetching: false, fetched: true, results: action.results, error: '' });
        case ActionTypes.FETCH_RESULTS_ERROR:
            return Object.assign({}, state, { fetching: false, fetched: false, results: [], error: action.error });
        case ActionTypes.FETCH_PLACE:
            return Object.assign({}, state, { locating: true });
        case ActionTypes.FETCH_PLACE_SUCCESS:
            return Object.assign({}, state, { locating: false, located: true, location: action.results, error: '' });
        case ActionTypes.FETCH_PLACE_ERROR:
            return Object.assign({}, state, { locating: false, located: false, location: {}, error: action.error });
        default:
            return state;
    }
};
exports.default = reducers;
//# sourceMappingURL=index.js.map