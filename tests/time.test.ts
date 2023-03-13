import { timeSince } from '../dist';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

describe('timeSince', () => {
  it('should return second ago format', () => {
    const date = new Date(new Date().getTime() - 1 * SECOND);
    const response = timeSince(date);
    expect(response).toBe('1 second ago');
  });

  it('should return minute ago format', () => {
    const date = new Date(new Date().getTime() - 1 * MINUTE);
    const response = timeSince(date);
    expect(response).toBe('1 minute ago');
  });

  it('should return hour ago format', () => {
    const date = new Date(new Date().getTime() - 1 * HOUR);
    const response = timeSince(date);
    expect(response).toBe('1 hour ago');
  });

  it('should return day ago format', () => {
    const date = new Date(new Date().getTime() - 1 * DAY);
    const response = timeSince(date);
    expect(response).toBe('1 day ago');
  });

  it('should return week ago format', () => {
    const date = new Date(new Date().getTime() - 1 * WEEK);
    const response = timeSince(date);
    expect(response).toBe('1 week ago');
  });

  it('should return month ago format', () => {
    const date = new Date(new Date().getTime() - 1 * MONTH);
    const response = timeSince(date);
    expect(response).toBe('1 month ago');
  });

  it('should return year ago format', () => {
    const date = new Date(new Date().getTime() - 1 * YEAR);
    const response = timeSince(date);
    expect(response).toBe('1 year ago');
  });
});

describe('timeSince (Plural)', () => {
  it('should return seconds ago format', () => {
    const date = new Date(new Date().getTime() - 2 * SECOND);
    const response = timeSince(date);
    expect(response).toBe('2 seconds ago');
  });

  it('should return minutes ago format', () => {
    const date = new Date(new Date().getTime() - 2 * MINUTE);
    const response = timeSince(date);
    expect(response).toBe('2 minutes ago');
  });

  it('should return hours ago format', () => {
    const date = new Date(new Date().getTime() - 2 * HOUR);
    const response = timeSince(date);
    expect(response).toBe('2 hours ago');
  });

  it('should return days ago format', () => {
    const date = new Date(new Date().getTime() - 2 * DAY);
    const response = timeSince(date);
    expect(response).toBe('2 days ago');
  });

  it('should return weeks ago format', () => {
    const date = new Date(new Date().getTime() - 2 * WEEK);
    const response = timeSince(date);
    expect(response).toBe('2 weeks ago');
  });

  it('should return months ago format', () => {
    const date = new Date(new Date().getTime() - 2 * MONTH);
    const response = timeSince(date);
    expect(response).toBe('2 months ago');
  });

  it('should return years ago format', () => {
    const date = new Date(new Date().getTime() - 2 * YEAR);
    const response = timeSince(date);
    expect(response).toBe('2 years ago');
  });
});
