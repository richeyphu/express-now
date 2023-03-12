/*!
 * express-now
 * Copyright(c) 2023 Phurit D.
 * MIT Licensed
 */

/**
 * ### timeSince
 * Returns a human readable time since a given date
 *
 * @param {Date} timeStamp - Date object
 * @returns {string} Human readable time in the format of "x unit ago"
 */
export const timeSince = (timeStamp: Date): string => {
  const now: Date = new Date();
  const secondsPast: number = (now.getTime() - timeStamp.getTime()) / 1000;
  const getTimeAgo = (time: number, unit: string): string => {
    return `${time} ${unit}${time > 1 ? 's' : ''} ago`;
  };
  if (secondsPast < 60) {
    return getTimeAgo(Math.round(secondsPast), 'second');
  }
  if (secondsPast < 3600) {
    return getTimeAgo(Math.floor(secondsPast / 60), 'minute');
  }
  if (secondsPast <= 86400) {
    return getTimeAgo(Math.floor(secondsPast / 3600), 'hour');
  }
  if (secondsPast <= 2628000) {
    return getTimeAgo(Math.floor(secondsPast / 86400), 'day');
  }
  if (secondsPast <= 31536000) {
    return getTimeAgo(Math.floor(secondsPast / 2628000), 'month');
  }
  // if (secondsPast > 31536000)
  return getTimeAgo(Math.floor(secondsPast / 31536000), 'year');
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
