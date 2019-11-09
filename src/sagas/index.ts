import { all } from 'redux-saga/effects';

import search from './search';
import locate from './locate';

export default function* rootSaga() {
  yield all([
    search(),
    locate()
  ])
}

