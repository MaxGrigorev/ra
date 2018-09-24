export const RESET_STATE = 'SessionState/RESET'
export const INITIALIZE_STATE = 'SessionState/INITIALIZE'
export const SESSION_STATE = 'SESSION_STATE';
export const RESET_CONNECTION = 'SessionState/RESET_CONNECTION';

// Initial state
const initialState = {
  isReady: false,
  isConnected: false,
  didShowChangeDefaultPassword: false,
  user: {},
}

export const resetSessionStateFromSnapshot = (state) => {
  return {
    type: RESET_STATE,
    payload: state
  }
}

export const initializeSessionState = () => {
  return {
    type: INITIALIZE_STATE
  }
}

// Reducer
const sessionStateReducers = {
  [INITIALIZE_STATE]: state => ({...state, isReady: true}),
  [RESET_STATE]: state => ({...state, isReady: true}),
  [SESSION_STATE]: (state = initialState, payload = {}) => ({
    ...state,
    isConnected: true,
    ...payload
  })
}

export const resetConnection = () => ({
  type: RESET_CONNECTION,
});

export const SessionStateReducer = (state = initialState, action) => {
  let reducer = sessionStateReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}
