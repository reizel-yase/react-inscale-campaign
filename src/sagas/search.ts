import Axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../action/types'

function* fetchSuggestions(action: any) {
  try {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${action.search}&key=AIzaSyBiAJBK9gGHhTW1-TAdCczJ2Sf1maih8ZQ`
    const response = yield call(fetch, proxyUrl + targetUrl, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    const data = yield call([response, response.json])
    yield put({
      type: types.FETCH_RESULTS_SUCCESS,
      results: data.predictions
    });
  } catch (err) {
    yield put({
      type: types.FETCH_RESULTS_ERROR,
      error: err,
    });
  }
}


export default function* search() {
  yield all([
    takeLatest(types.FETCH_RESULTS, fetchSuggestions)
  ]);
}