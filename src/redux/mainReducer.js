import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth6164Reducer from '../features/EmailAuth6164/redux/reducers';
import CalendarView6163Reducer from '../features/CalendarView6163/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth6164: EmailAuth6164Reducer,
CalendarView6163: CalendarView6163Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});