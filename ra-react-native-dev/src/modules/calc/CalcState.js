import axios from 'axios';

const IP='192.168.1.8:8080'//localhost:8080

// Initial state
const initialState = {
  value: '0',
  loading: false
}

// Actions
const RESET = 'CalcState/RESET'
const CALC='CalcState/CALC'

// Action creators
export function reset () {
  return { type: RESET }
}

export async function calc (id) {
  let like= axios.post(`http://${IP}/api/calc`, {
    id: id
  })
  .then((response)=> {
    return response.data.result
  })
  .catch(function (error) {
    console.log('error',error);
  });
  return {
    type: CALC,
    payload: await like
  }
}

const calcStateReducers = {
  [RESET]: state => initialState,

  [CALC]: (state, payload) => ({...state, loading: false, value: payload})
}

export const CalcStateReducer = (state = initialState, action = {}) => {
  let reducer = calcStateReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}
