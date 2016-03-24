import mediaQuery from 'css-mediaquery'

class NativeMediaQueryList {
  _query = '';

  constructor(mediaQueryString) {
    this._query = mediaQueryString
  }

  get matches() {
    return mediaQuery.match(this._query, {
      type: 'screen',
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  addListener() {}
  removeListener() {}
}

export default mediaQueryString => new NativeMediaQueryList(mediaQueryString)
