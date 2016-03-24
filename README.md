match-media-mocks
=================

Server and React-Native mocks for matchMedia.

## Usage

```js
import { Platform } from 'react-native'
import { nativeMatchMedia, serverMatchMedia } from 'match-media-mocks'

if (Platform.OS === 'ios' || Platform.OS === 'android') {
  window.matchMedia = nativeMatchMedia
} else if (Platform.OS === 'web' && !window.matchMedia) {
  window.matchMedia = serverMatchMedia
}
```

## License
MIT
