import { Dimensions } from 'react-native';
import RCTDeviceEventEmitter from 'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter';
import mediaQuery from 'css-mediaquery';

class NativeMediaQueryList {
  _listeners = [];
  _query = '';

  constructor(mediaQueryString) {
    this._query = mediaQueryString;
    if(Dimensions.addEventListener) {
      Dimensions.addEventListener('change', e => {
          this._notifyListeners(e)
        }
      )
    } else {
      // In case of using react native 0.42
      RCTDeviceEventEmitter.addListener('didUpdateDimensions', (e) => {
        this._notifyListeners(e);
      });
    }
  }

  get matches() {
    return mediaQuery.match(this._query, {
      type: 'screen',
      ...Dimensions.get('window'),
    })
  }

  _notifyListeners() {
    this._listeners.forEach(listener => {
      listener(this);
    })
  }

  addListener(listener) {
    this._listeners.push(listener);
  }

  removeListener(listener) {
    const index = this._listeners.indexOf(listener);
    if (index === -1) return;
    this._listeners.splice(index);
  }
}

export default mediaQueryString => new NativeMediaQueryList(mediaQueryString);
