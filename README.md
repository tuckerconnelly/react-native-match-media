react-native-match-media
========================

`window.matchMedia` polyfill for React Native

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
