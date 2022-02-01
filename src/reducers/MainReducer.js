import {
  LOADING,
  CHANGE_VALUE,
} from '../constants';
const INITAL_STATE = {
  loading: false,
};
export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'RESET_APP':
      return {...INITAL_STATE, resetApp: true};
    case LOADING:
      return {...state, ...action.payload};
    case CHANGE_VALUE:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
