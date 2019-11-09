import * as ActionTypes from '../action/types'

export interface State {
  results: string[]
  fetching: boolean
  fetched: boolean
  location: LatLng
  locating: boolean
  located: boolean
  error: any
}

export interface LatLng {
  lat: number
  lng: number
}

const initialState: State = {
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
}


const reducers = (state: State = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_RESULTS:
      return {
        ...state,
        fetching: true
      }
    case ActionTypes.FETCH_RESULTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        results: action.results,
        error: ''
      }
    case ActionTypes.FETCH_RESULTS_ERROR:
      return {
        ...state,
        fetching: false,
        fetched: false,
        results: [],
        error: action.error
      }
    case ActionTypes.FETCH_PLACE:
      return {
        ...state,
        locating: true
      }
    case ActionTypes.FETCH_PLACE_SUCCESS:
      return {
        ...state,
        locating: false,
        located: true,
        location: action.results,
        error: ''
      }
    case ActionTypes.FETCH_PLACE_ERROR:
      return {
        ...state,
        locating: false,
        located: false,
        location: {},
        error: action.error
      }
    default:
      return state
  }
}

export default reducers
