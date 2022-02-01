import react from 'react';
import { I18nManager } from 'react-native';

export const GALLERY = 'gallery';
export const CAMERA = 'camera';
export const LANG = I18nManager.isRTL ? 'ar' : 'en';
export const REVERSELANG = I18nManager.isRTL ? 'en' : 'ar';

export const LOGIN = 'LOGIN';
export const LOADING = 'LOADING';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const STOP_LOADING = 'STOP_LOADING';
export const ERROR = 'ERROR';
