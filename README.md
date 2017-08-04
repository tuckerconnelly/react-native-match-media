react-native-match-media
========================

`window.matchMedia` polyfill for React Native

Has a peer dependency of [yamill/react-native-orientation](https://github.com/yamill/react-native-orientation), so make sure that's installed first.

## Usage

```js
import matchMedia from 'react-native-match-media'

global.matchMedia = matchMedia
```

```js
if (global.matchMedia('(min-width: 400px)').matches) {
  // Do something
}
```

## License
MIT
