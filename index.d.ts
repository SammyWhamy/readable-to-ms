// Type definitions for readable-to-ms
// Project: readable-to-ms
// Definitions by: Sam Teeuwisse

import readableToMs from ".";

interface Converted {
    ms: number,
    text: string 
}

export = readableToMs;
/**
 * @summary Convert a string of human readable time to milliseconds
 * @example
 * readableToMs("1 minute") // 60000
 * readableToMs("10s this is cool!") // {ms: 10000, text: "this is cool!"}
 * @param {string} str Input to get time from
 * @returns {number | object | false} Number | Object | False
 */
declare function readableToMs(str: string): number | Converted | false;