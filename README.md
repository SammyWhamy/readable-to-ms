# readable-to-ms
Convert readable time to milliseconds

## Installation

```sh
npm install readable-to-ms
```

## Usage

```javascript
const rtm = require('readable-to-ms');

rtm('1ms') // 1
rtm('1m') // 60000
rtm('1y') // 31556952000
rtm('1m 1s') // 61000 
rtm('Nope') // false 
rtm('1min this is cool!') // {ms: 60000, text: "this is cool!"} 
rtm('1 minute') // 60000 
rtm('5 secs') // 5000 
rtm('12 seconds 5 ms') // 12005
rtm('1 minute update in 1 hour') // {ms: 60000, text: "update in 1 hour"}
```

## Testing

```sh
npm run test "input"
```

## Author

👤 **Sam Teeuwisse**
* GitHub: [@SammyWhamy](https://github.com/SammyWhamy)

## License

Copyright © 2020 [Sam Teeuwisse](https://github.com/SammyWhamy)

This project is [MIT](https://github.com/SammyWhamy/readable-to-ms/blob/main/LICENSE) licensed.