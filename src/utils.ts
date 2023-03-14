/*!
 * express-now
 * Copyright(c) 2023 Phurit D.
 * MIT Licensed
 */

/**
 * ### timeSince
 * Returns a human readable time since a given date
 *
 * @param {Date} timeStamp - A date object
 * @returns {string} Human readable time in the format of "x unit ago"
 * 
 * @example
 * Here's an example of using the function:
 * ```js
 * const dateNow = new Date();
 * const dateAgo = new Date(dateNow.getTime() - 5000);
 * console.log(timeSince(dateAgo)); // 5 seconds ago
 * ```
 */
export const timeSince = (timeStamp: Date): string => {
  const MINUTE = 60;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;
  const now: Date = new Date();
  const secondsPast: number = (now.getTime() - timeStamp.getTime()) / 1000;
  const getTimeAgo = (time: number, unit: string): string => {
    return `${time} ${unit}${time > 1 ? 's' : ''} ago`;
  };
  if (secondsPast < MINUTE) {
    return getTimeAgo(Math.round(secondsPast), 'second');
  }
  if (secondsPast < HOUR) {
    return getTimeAgo(Math.floor(secondsPast / MINUTE), 'minute');
  }
  if (secondsPast < DAY) {
    return getTimeAgo(Math.floor(secondsPast / HOUR), 'hour');
  }
  if (secondsPast < WEEK) {
    return getTimeAgo(Math.floor(secondsPast / DAY), 'day');
  }
  if (secondsPast < MONTH) {
    return getTimeAgo(Math.floor(secondsPast / WEEK), 'week');
  }
  if (secondsPast < YEAR) {
    return getTimeAgo(Math.floor(secondsPast / MONTH), 'month');
  }
  return getTimeAgo(Math.floor(secondsPast / YEAR), 'year');
};

export const sum = (arr: number[], from: number, length: number): number => {
  let total = 0;
  for (let i = from - length; i < from; i++) {
    total += arr[(i + arr.length) % arr.length];
  }
  return total;
};

export const average = (
  arr: number[],
  from: number,
  length: number
): number => {
  const total = sum(arr, from, length);
  return Math.round(total / arr.length);
};

export const resetCounter = (counter: number[]): void => {
  const minute = new Date().getMinutes();
  counter[(minute + 1) % 59] = 0;
};
