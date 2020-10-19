const rtm = require('../index');
process.argv.splice(0, 2);
console.log(rtm(process.argv.join(" ")));