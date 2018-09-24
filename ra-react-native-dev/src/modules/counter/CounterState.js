import { generateRandomNumber } from '../../services/randomNumberService'

// Initial state
const initialState = {
  value: 0,
  loading: false
}

// Actions
const INCREMENT = 'CounterState/INCREMENT'
const RESET = 'CounterState/RESET'
const RANDOM_REQUEST = 'CounterState/RANDOM_REQUEST'
const RANDOM_RESPONSE = 'CounterState/RANDOM_RESPONSE'

// Action creators
export function increment () {
  return { type: INCREMENT }
}

export function reset () {
  return { type: RESET }
}

export function randomRequest () {
  return { type: RANDOM_REQUEST }
}

export async function requestRandomNumber () {
  return {
    type: RANDOM_RESPONSE,
    payload: await generateRandomNumber()
  }
}

export function random () {
  return async dispatch => {
    dispatch(randomRequest())
    return dispatch(requestRandomNumber())
  }
}

const counterStateReducers = {
  [INCREMENT]: state => ({...state, value: state.value + 1}),

  [RESET]: state => initialState,

  [RANDOM_REQUEST]: state => ({...state, loading: true}),

  [RANDOM_RESPONSE]: (state, payload) => ({...state, loading: false, value: payload})
}

export const CounterStateReducer = (state = initialState, action = {}) => {
  let reducer = counterStateReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}
