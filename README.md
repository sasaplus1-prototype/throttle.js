# throttle.js

throttling function

## Installation

```sh
$ npm install sasaplus1-prototype/throttle.js
```

## Usage

via `require()`

```js
var throttle = require('throttle');
```

via `<script>`

```html
<script src="throttle.min.js"></script>
```

### Example

```js
var fn = throttle(function() { /* code */ }, 1000);
```

## Functions

### throttle(fn, timeout)

- `fn`
  - `Function`
- `interval`
  - `Number`
- `return`
  - `Function`

return throttled function.

## License

The MIT license.
