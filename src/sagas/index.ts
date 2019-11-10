import { all } from 'redux-saga/effects';

import { 
  list, 
  add, 
  filter
} from './campaign'

export default function* rootSaga() {
  yield all([
    list(),
    add(),
    filter()
  ])
}

