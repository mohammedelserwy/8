import axios from 'axios';
import {
  LOADING,
  ERROR,
  CHANGE_VALUE,
  LANG,
} from '../constants/';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl, L, commonheaders, renderError as cAlert} from '../Config';
import Store from '../store/index';
import * as NavigationActions from '../NavigationActions';

export function changeValue(object) {
  return {type: CHANGE_VALUE, payload: object};
}

const ErrorAction = (dispatch, error) => {
  dispatch({
    type: ERROR,
    payload: error,
  });
};

let progressShown = false;

export const PerformRequestOffline = async (options, _action) => {
  const dispatch = Store.dispatch;
  const headers = {...commonheaders, ...{'Content-Type': 'application/json'}};
  let data = options.data,
    method = options.method ? options.method : 'POST',
    config = {
      method: options.method,
      url: baseUrl + options.url,
      headers: headers,
    };
  if (data) {
    if (method.toLowerCase() === 'get') {
      config.params = data;
    } else {
      config.data = data;
    }
  }

  try {
    if (!progressShown && !options.noLoader) {
      dispatch({type: LOADING, payload: {loading: true}});
      progressShown = true;
    }
    const response = await axios(config);
    if (progressShown) {
      dispatch({
        type: LOADING,
        payload: {loading: false, loadingText: options.url},
      });
      progressShown = false;
    }
    if (response.status == 200) {
      if (response.data && response.data.message && options.node != true) {
        cAlert(response.data.message);
      }
      let ret = response.data;
      return ret;
    }

    let message =
      response.data && response.data.message
        ? response.data.message
        : L('internetConnectionProblem');
    ErrorAction(dispatch, message);
    cAlert(message);
    return false;
  } catch (error) {
    const {response} = error;
    progressShown = false;
    let message =
      response.data && response.data.message
        ? response.data.message
        : L('internetConnectionProblem');
    dispatch({type: LOADING, payload: {loading: false}});

    if (response.data && response.data.errors) {
      dispatch({type: 'ERROR_DATA', payload: {errors: response.data.errors}});
    }
    if (response.status == 401) {
      dispatch({
        type: 'RESET_APP',
        payload: {},
      });
      _logOut(); //
    }
    ErrorAction(dispatch, message);
    cAlert(message);
    return false;
  }
};
const _logOut = async () => {
  try {
    // await AsyncStorage.removeItem('userInfo');
    AsyncStorage.multiRemove(['auth_token', 'userInfo']);
  } catch (e) {}
};
export function logoutUser() {
  _logOut();
  return {
    type: 'RESET_APP',
    payload: {},
  };
}
