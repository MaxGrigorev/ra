import { combineReducers } from 'redux'
import NavigatorStateReducer from '../modules/navigator/NavigatorState'
import {CounterStateReducer} from '../modules/counter/CounterState'
import {SessionStateReducer} from '../modules/session/SessionState'
import {CalcStateReducer} from '../modules/calc/CalcState'
// ## Generator Reducer Imports

const mainReducer = combineReducers({
  counter: CounterStateReducer,
  navigatorState: NavigatorStateReducer,
  session: SessionStateReducer,
  calc: CalcStateReducer,
})

export default mainReducer
