import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import * as event from '../../_metronic/partials/widgets/Event/Activity/_Redux/ActivitySlice'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  event: event.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.saga()])
}
