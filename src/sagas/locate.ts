import Axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../action/types'

function* locatePlace(action: any) {
  try {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${action.place}&key=AIzaSyBiAJBK9gGHhTW1-TAdCczJ2Sf1maih8ZQ`
    const response = yield call(fetch, proxyUrl + targetUrl, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    const data = yield call([response, response.json])
    yield put({
      type: types.FETCH_PLACE_SUCCESS,
      results: data.result.geometry.location
    });
  } catch (err) {
    yield put({
      type: types.FETCH_PLACE_ERROR,
      error: err,
    });
  }
}


export default function* locate() {
  yield all([
    takeLatest(types.FETCH_PLACE, locatePlace)
  ]);
}