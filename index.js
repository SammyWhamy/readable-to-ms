const v = {
    "ms": 1, "milli": 1, "millis": 1, "millisecond": 1, "milliseconds": 1,
    "s": 1000, "sec": 1000, "secs": 1000, "second": 1000, "seconds": 1000,
    "m": 60000, "min": 60000, "mins": 60000, "minute": 60000, "minutes": 60000,
    "h": 3600000, "hr": 3600000, "hrs": 3600000, "hour": 3600000, "hours": 3600000,
    "d": 86400000, "day": 86400000, "days": 86400000,
    "w": 604800000, "week": 604800000, "weeks": 604800000,
    "mo": 2592000000, "month": 2592000000, "months": 2592000000,
    "y": 31556952000, "year": 31556952000, "years": 31556952000
};
const r = /(\d+)\s*(milliseconds|millisecond|millis|milli|ms|seconds|second|secs|sec|s|minutes|minute|mins|min|m|hours|hour|hrs|hr|h|days|day|d|weeks|week|w|months|month|mo|years|year|y)\s*/gy;
module.exports = (s) => {
    if(typeof s!=='string')return false;
    let ms=0;let t=s;
    while(m=r.exec(s.trim().toLowerCase())){ms+=parseInt(m[1])*v[m[2]];t=t.replace(m[0],"");}
    return(ms?(t.trim().length?{ms:ms,text:t.trim()}:ms):false);
};