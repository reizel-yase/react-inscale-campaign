import Axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../action/types'

function* getCampaigns(action: any) {
  try {
    const apiUrl = "http://localhost:3000/campaigns"
    const response = yield call(fetch, apiUrl, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    const data = yield call([response, response.json])
    yield put({
      type: types.FETCH_CAMPAIGNS_SUCCESS,
      results: data
    });
  } catch (err) {
    yield put({
      type: types.FETCH_CAMPAIGNS_ERROR,
      error: err,
    });
  }
}

function* addCampaigns(action: any) {
  try {
    const apiUrl = "http://localhost:3000/campaigns"
    const response = yield call(fetch, apiUrl, {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.payload)
    })
    const data = yield call([response, response.json])
    yield put({
      type: types.ADD_CAMPAIGNS_SUCCESS,
      results: data
    });
  } catch (err) {
    yield put({
      type: types.ADD_CAMPAIGNS_ERROR,
      error: err,
    });
  }
}

function* filterByName(action: any) {
  try {
    const apiUrl = `http://localhost:3000/campaigns?name_like=${action.payload}`
    const response = yield call(fetch, apiUrl, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    const data = yield call([response, response.json])
    yield put({
      type: types.SEARCH_BY_NAME_SUCCESS,
      results: data
    });
  } catch (err) {
    yield put({
      type: types.SEARCH_BY_NAME_ERROR,
      error: err,
    });
  }
}

function* filterByDate(action: any) {
  try {
    const apiUrl = `http://localhost:3000/campaigns`
    let query
    
    if (action.payload.startDate && action.payload.endDate) {
      query = `?startDate_gte=${action.payload.startDate}&endDate_lte=${action.payload.endDate}`
    } else {
      if (action.payload.startDate) {
        query = `?startDate_gte=${action.payload.startDate}`
      } else {
        query = `?endDate_lte=${action.payload.endDate}`
      }
    }

    const response = yield call(fetch, apiUrl + query, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    const data = yield call([response, response.json])
    yield put({
      type: types.SEARCH_BY_DATE_SUCCESS,
      results: data
    });
  } catch (err) {
    yield put({
      type: types.SEARCH_BY_DATE_ERROR,
      error: err,
    });
  }
}

function* list() {
  yield all([
    takeLatest(types.FETCH_CAMPAIGNS, getCampaigns)
  ]);
}

function* add() {
  yield all([
    takeLatest(types.ADD_CAMPAIGNS, addCampaigns)
  ]);
}

function* searchByName() {
  yield all([
    takeLatest(types.SEARCH_BY_NAME, filterByName)
  ])
}

function* searchByDate() {
  yield all([
    takeLatest(types.SEARCH_BY_DATE, filterByDate)
  ])
}

export {
  add,
  list,
  searchByName,
  searchByDate
}