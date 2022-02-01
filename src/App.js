import React, {Component} from 'react';
import {
  I18nManager,
  KeyboardAvoidingView,
  Modal,
  Platform,
  View,
} from 'react-native';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import RouterNavigator from './RouterNavigator';
import {navigationRef, isReadyRef, reset} from './NavigationActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeLng} from './Config';
import {Spinner, VectorIcon} from './components/assets/UIComponents';
import Store from './store';

function AppContainer(props) {
  return (
    <Provider store={Store}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <RouterNavigator  />
          </KeyboardAvoidingView>
        </NavigationContainer>
    </Provider>
  );
}
class App extends Component {
  state = {lng: false, lang: '', loading: false};
  async componentDidMount() {
    let lang = await AsyncStorage.getItem('language');
    if (lang) {
      this.setState({lng: true, lang: lang});
      changeLng(lang);
    } else {
      this.setState({lng: true});
    }
    Store.subscribe(() => {
      const storeState = Store.getState();
      if (storeState.mainR.loading) {
        this.setState({loading: true});
      } else {
        this.setState({loading: false});
      }
    });
  }
  render() {
    const {lng, lang, loading} = this.state;
    if (lng) {
      return (
        <View style={{flex: 1}}>
          <AppContainer lang={lang} />
          {loading ? <Spinner /> : null}
        </View>
      );
    } else {
      return <View />;
    }
  }
}

export default App;
