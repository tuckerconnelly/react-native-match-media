react-native-match-media
========================

`window.matchMedia` mock for React Native

Has a peer dependency of [walmartreact/react-native-orientation-listener](https://github.com/walmartreact/react-native-orientation-listener), so make sure that's installed first.

## Usage

```js
import matchMedia from 'react-native-match-media'

if (matchMedia('(min-width: 400px)').matches) {
  // Do something
}
```

## License
MIT
