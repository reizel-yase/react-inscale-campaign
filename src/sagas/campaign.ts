import Axios from 'axios'
import * as moment from "moment"
import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../action/types'
import { Campaign } from "../types/campaign"

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

// manual filtering 
// because JSON server
// does not filter
// by date range
function* filterCampaigns(action: any) {
  try {
    const apiUrl = !!action.payload.name ? `http://localhost:3000/campaigns?name_like=${action.payload.name}` : `http://localhost:3000/campaigns`
    const response = yield call(fetch, apiUrl, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    const data = yield call([response, response.json])
    const filtered = action.payload.name || action.payload.startDate || action.payload.endDate
    const filteredData = !!filtered ? data.filter((c: Campaign) => {
      const startDate = moment(c.startDate, 'MM/DD/YYYY').format()
      const endDate = moment(c.endDate, 'MM/DD/YYYY').format()

      const inputStartDate = action.payload.startDate ? moment(action.payload.startDate, 'MM/DD/YYYY').format() : ''
      const inputEndDate = action.payload.endDate? moment(action.payload.endDate, 'MM/DD/YYYY').format() : ''

        if (inputStartDate && inputEndDate) {
          if (inputStartDate <= inputEndDate) {
              return inputStartDate >= startDate && inputEndDate <= endDate
          }

          return false
        } else {
          if (inputStartDate || inputEndDate) {
            if (inputStartDate) {
              return inputStartDate <= startDate
            }

            return inputEndDate >= endDate
          }

          return c
        }
    }) : data

    yield put({
      type: types.FILTER_CAMPAIGNS_SUCCESS,
      results: filteredData
    });
  } catch (err) {
    yield put({
      type: types.FILTER_CAMPAIGNS_ERROR,
      error: err,
    });
  }
}

function* filter() {
  yield all([
    takeLatest(types.FILTER_CAMPAIGNS, filterCampaigns)
  ]);
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

export {
  add,
  list,
  filter
}