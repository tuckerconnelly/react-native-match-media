import { Dimensions } from 'react-native'
import mediaQuery from 'css-mediaquery'
import pull from 'lodash/pull'

class NativeMediaQueryList {
  _listeners = [];
  _query = '';
  _dimensions = {};

  constructor(mediaQueryString) {
    this._query = mediaQueryString

    // Poll dimensions for changes
    // Submitted a product pain to make Dimensions an event emitter
    // https://productpains.com/post/react-native/emit-an-event-when-dimensions-change/
    setInterval(() => {
      const { width, height } = Dimensions.get('window')
      if (width === this._dimensions.width && height === this._dimensions.height) {
        return
      }

      this._dimensions = { width, height }
      this._notifyListeners()
    }, 3000)
  }

  get matches() {
    return mediaQuery.match(this._query, {
      type: 'screen',
      ...this._dimensions,
    })
  }

  _notifyListeners() {
    this._listeners.forEach(listener => {
      listener(this)
    })
  }

  addListener(listener) {
    this._listeners.push(listener)
  }
  removeListener(listener) {
    pull(this._listeners, listener)
  }
}

export default mediaQueryString => new NativeMediaQueryList(mediaQueryString)
