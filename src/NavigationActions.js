import * as React from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

export const navigationRef = React.createRef();
export const isReadyRef = React.createRef();

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
}
export function push(...args) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.push(...args));
  }
}
export function replace(...args) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.replace(...args));
  }
}
export function pop(...args) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.pop(...args));
  }
}
export function goBack(...args) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.goBack(...args);
  }
}
export function reset(name, index, params) {
  // navigationRef.current?.dispatch(StackActions.pop(...args));
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: index || 0,
      routes: [
        {
          name: name,
          params: params,
        },
      ],
    }),
  ); //RESET APP
}
