import { Dimensions } from 'react-native'
import mediaQuery from 'css-mediaquery'
import Orientation from 'react-native-orientation-listener'

class NativeMediaQueryList {
  _listeners = [];
  _query = '';
  _orientation = 'PORTRAIT';

  constructor(mediaQueryString) {
    this._query = mediaQueryString
    this._dimensions = Dimensions.get('window')
    Orientation.getOrientation(orientation => {
      this._notifyListeners({ orientation })
    })

    Orientation.addListener(e => {
      this._notifyListeners(e)
    })
  }

  get _dimensions() {
    const { width, height } = Dimensions.get('window')
    if (this._orientation === 'PORTRAIT') return { width, height }
    return { width: height, height: width }
  }

  get matches() {
    return mediaQuery.match(this._query, {
      type: 'screen',
      ...this._dimensions,
    })
  }

  _notifyListeners(e) {
    this._orientation = e.orientation
    this._listeners.forEach(listener => {
      listener(this)
    })
  }

  addListener(listener) {
    this._listeners.push(listener)
  }
  removeListener(listener) {
    const index = this._listeners.indexOf(listener)
    if (index === -1) return
    this._listeners.splice(index)
  }
}

export default mediaQueryString => new NativeMediaQueryList(mediaQueryString)
