import * as ActionTypes from './action.types';
import * as Services from 'services';

export const search = params => {
  return dispatch => {
    dispatch({ type: ActionTypes.DEMO_SEARCH });
    Services.demo(params)
      .then(data => dispatch({ type: ActionTypes.DEMO_SEARCH_SUCCESS, data }))
      .catch(message =>
        dispatch({ type: ActionTypes.DEMO_SEARCH_FAILED, message })
      );
  };
};
