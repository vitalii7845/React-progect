import {
  getWeekStartDate,
  generateWeekRange,
  formatMins,
  getCurrentMonths,
  months,
} from './dateUtils';

test('Test getWeekStartDate() all days of week', () => {
  for (let day = 2; day < 9; day += 1) {
    const dayOfWeek = new Date(2024, 4, day);
    const monday = new Date(2024, 4, 2);

    expect(getWeekStartDate(dayOfWeek)).toEqual(monday);
  }
});

test('Test generateWeekRange()', () => {
  const weekRange = [2, 3, 4, 5, 6, 7, 8].map(day => new Date(2024, 4, day));

  const wednesday = new Date(2024, 4, 4);
  const sunday = new Date(2024, 4, 8);
  const startDayWednesday = getWeekStartDate(wednesday);
  const startDaySunday = getWeekStartDate(sunday);

  expect(generateWeekRange(startDayWednesday)).toEqual(weekRange);
  expect(generateWeekRange(startDaySunday)).toEqual(weekRange);
});

test('Test formatMins(minutes >= 10)', () => {
  const minutes = new Date(2024, 4, 1, 12, 50).getMinutes();

  expect(formatMins(minutes)).toBe(50);
  expect(typeof formatMins(minutes)).toBe('number');
});

test('Test formatMins(minutes < 10)', () => {
  const minutes = new Date(2024, 4, 1, 12, 7).getMinutes();

  expect(formatMins(minutes)).toBe('07');
  expect(typeof formatMins(minutes)).toBe('string');
});

test('Test getCurrentMonths() all months', () => {
  const dates = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(month => new Date(2024, month));
  expect(getCurrentMonths(dates)).toEqual(months);
  expect(typeof getCurrentMonths(dates)).toEqual('object');
  expect(getCurrentMonths(dates).length).toEqual(12);
});
