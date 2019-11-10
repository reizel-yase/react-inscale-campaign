import { all } from 'redux-saga/effects';

import { 
  list, 
  add, 
  searchByName, 
  searchByDate 
} from './campaign'

export default function* rootSaga() {
  yield all([
    list(),
    add(),
    searchByName(),
    searchByDate()
  ])
}

