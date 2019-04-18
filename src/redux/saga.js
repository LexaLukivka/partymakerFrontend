import { all, fork } from 'redux-saga/effects'
import auth from './auth/saga'
import entities from './entities/saga'

export default function* rootSaga() {
  yield all([
    fork(auth),
    fork(entities),
  ])
}
