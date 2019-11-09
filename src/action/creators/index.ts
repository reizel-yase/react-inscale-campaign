import * as types from '../types';

export const getResults = (search: string) => {
  return {
    type: types.FETCH_RESULTS,
    search
  }
}

export const getLocation = (place: string) => {
  return {
    type: types.FETCH_PLACE,
    place
  }
}