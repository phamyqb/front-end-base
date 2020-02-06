import * as ActionTypes from '../actions/action.types';

const defaultState = {
  data: [],
  loading: false,
  message: ''
};

export default function demoReducers(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.DEMO_SEARCH:
      return { ...state, loading: true, message: '' };
    case ActionTypes.DEMO_SEARCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case ActionTypes.DEMO_SEARCH_FAILED:
      return {
        ...state,
        message: action.message,
        data: [],
        loading: false
      };
    default:
      return state;
  }
}
