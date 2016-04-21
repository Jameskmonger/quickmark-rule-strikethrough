# quickmark-rule-strikethrough

Strikethrough text matching rule for [quickmark](https://github.com/jameskmonger/quickmark).

## Usage

```javascript
const strikethrough = require('quickmark-rule-strikethrough');

strikethrough('~~i am no longer relevant~~');
// {
//     original: '~~i am no longer relevant~~',
//     parsed: 'i am no longer relevant'
// }



strikethrough('~~i am no longer relevant~~ but i still am');
// {
//     original: '~~i am no longer relevant~~',
//     parsed: 'i am no longer relevant'
// }



strikethrough('plain text');
// undefined
```

## License

[MIT](LICENSE)
