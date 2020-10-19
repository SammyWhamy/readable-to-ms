// Type definitions for readable-to-ms
// Project: readable-to-ms
// Definitions by: Sam Teeuwisse

import readableToMs from ".";

export = readableToMs;
/**
 * @summary Convert a string of human readable time to milliseconds
 * @description Takes an input of a single string. It will match as many parts of the string that are convertable to time. Once it encounters a part that is not able to be converted, the rest of the string will be returned as well.
 * 
 * If there is only convertable time, the output is a `number`.
 * 
 * If there is extra text, the output is an `object` structured like: `{ms: number, text: string}` where ms is the time it was able to convert, and text the rest of the string.
 * 
 * If there is no time to be converted or if the string is empty, the output will be `false`.
 * @example readableToMs("1 minute") // 60000
 * readableToMs("10s this is cool!") // {ms: 10000, text: "this is cool!"}
 * @param {string} str Input to get time from
 * @returns {number | object | false} Number | Object | False
 */
declare function readableToMs(str: string): number | object | false;