react-native-match-media
========================

`window.matchMedia` polyfill for React Native Web

Has a peer dependency of [walmartreact/react-native-orientation-listener](https://github.com/walmartreact/react-native-orientation-listener), so make sure that's installed first.

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
