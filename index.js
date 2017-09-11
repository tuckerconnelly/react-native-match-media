import { Dimensions } from 'react-native';
import mediaQuery from 'css-mediaquery';
import Orientation from 'react-native-orientation';

class NativeMediaQueryList {
  _listeners = [];
  _query = '';
  _orientation = 'PORTRAIT';

  constructor(mediaQueryString) {
    this._query = mediaQueryString;
    this._orientation = Orientation.getInitialOrientation();
    Orientation.addOrientationListener(e => {
      this._notifyListeners(e)
    })
  }

  get matches() {
    return mediaQuery.match(this._query, {
      type: 'screen',
      ...Dimensions.get('window'),
    })
  }

  _notifyListeners(e) {
    this._orientation = e;
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

export default mediaQueryString => new NativeMediaQueryList(mediaQueryString)
