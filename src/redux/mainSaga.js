import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth6164Saga from '../features/EmailAuth6164/redux/sagas';
import CalendarView6163Saga from '../features/CalendarView6163/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth6164Saga,
CalendarView6163Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}