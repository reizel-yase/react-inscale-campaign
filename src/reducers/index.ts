import * as ActionTypes from '../action/types'
import { Campaign } from '../types/campaign'

export interface State {
  campaigns: Campaign[]
  fetching: boolean
  fetched: boolean
  adding: boolean
  added: boolean
  error: any
}

const initialState: State = {
  campaigns: [],
  fetching: false,
  fetched: false,
  adding: false,
  added: false,
  error: ''
}


const reducers = (state: State = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_CAMPAIGNS:
      return {
        ...state,
        fetching: true
      }
    case ActionTypes.FETCH_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        campaigns: action.results,
        error: ''
      }
    case ActionTypes.FETCH_CAMPAIGNS_ERROR:
      return {
        ...state,
        fetching: false,
        fetched: false,
        campaigns: [],
        error: action.error
      }
    case ActionTypes.ADD_CAMPAIGNS:
      return {
        ...state,
        adding: true
      }
    case ActionTypes.ADD_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        adding: false,
        added: true,
        campaigns: [
          ...state.campaigns,
          ...action.results
        ],
        error: ''
      }
    case ActionTypes.ADD_CAMPAIGNS_ERROR:
      return {
        ...state,
        adding: false,
        added: false,
        campaigns: [],
        error: action.error
      }
    case ActionTypes.FILTER_CAMPAIGNS:
      return {
        ...state,
        fetching: true
      }
    case ActionTypes.FILTER_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        campaigns: action.results,
        error: ''
      }
    case ActionTypes.FILTER_CAMPAIGNS_ERROR:
      return {
        ...state,
        fetching: false,
        fetched: false,
        campaigns: [],
        error: action.error
      }
    default:
      return state
  }
}

export default reducers
