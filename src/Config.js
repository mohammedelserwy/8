import {I18nManager, Platform} from 'react-native';
import I18n, {getLanguages} from 'react-native-i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import {LANG} from './constants';
import Toast from 'react-native-root-toast';
import {
  fontRegular,
  hp,
  primaryColor,
  wp,
} from './components/assets/styles/Styles';

I18n.fallbacks = true;
// I18n.defaultLocale = 'en-US'

I18n.translations = {
  en: require('./translations/en.json'),
  ar: require('./translations/ar.json'),
};

export let language;

export let baseUrl =
  'https://testprojects.live/ehtmam/' + I18n.locale + '/api/';

export const baseUploadUrl = 'https://testprojects.live/ehtmam/upload/';
export const commonheaders = {
  Accept: 'application/json',
  client: '8d69a6e3ed5b9b1943c4ba1f18a1aa9bcc768da5',
  secret: '8bf70c23f2b208d8b5201b13b7068a29edd80e79',
  'Content-Type': 'multipart/form-data',
};
export function changeLng(lang, flag) {
  console.log({lang});
  AsyncStorage.setItem('language', lang);
  I18n.locale = lang;
  commonheaders = {...commonheaders, language: lang};
  if (lang === 'ar') {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    if (Platform.OS === 'ios' && !I18nManager.isRTL) {
      RNRestart.Restart();
    }
  } else if (lang === 'en') {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
    if (Platform.OS === 'ios' && I18nManager.isRTL) {
      RNRestart.Restart();
    }
  }
  if (flag) {
    RNRestart.Restart();
  }
}
export function L(key) {
  let lang = LANG;
  let word = I18n.t(key, {locale: lang ? lang : I18n.locale});
  return word;
}
export function formatDate(date, flag) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var mH = hours < 10 ? '0' + hours : hours;
  var mM = minutes < 10 ? '0' + minutes : minutes;
  var militryClock = mH == '00' ? '12' + ':' + mM : mH + ':' + mM;
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  if (flag == 1) {
    return strTime;
  } else if (flag == 2) {
    return militryClock;
  } else {
    let fullYear = date.getFullYear();
    let month = Number(date.getMonth() + 1);
    let day = date.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    return fullYear + '-' + month + '-' + day;
  }
}
export function inArray(needle, arr) {
  var haystack = arr;
  var length = haystack.length;
  for (var i = 0; i < length; i++) {
    if (haystack[i].id === needle) return true;
  }
  return false;
}
export function renderError(message) {
  let toast = null;
  return (toast = Toast.show(
    message,
    {
      textStyle: {
        fontFamily: fontRegular,
        fontSize: wp(3.5),
        color: '#fff',
        lineHeight: hp(3),
      },
    },
    {
      duration: Toast.durations.SHORT,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
      backgroundColor: primaryColor,
      opacity: 0.4,
      delay: 0.2,
    },
  ));
}
