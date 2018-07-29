// @flow
import _map from 'lodash/map';
import _padStart from 'lodash/padStart';
import _range from 'lodash/range';

export function getCurrentYear(isFull?: boolean, date = new Date()) {
  return (date.getFullYear() - (isFull ? 0 : 2000)).toString();
}

export function getCurrentMonth(date: Date = new Date()) {
  return _padStart(`${date.getMonth() + 1}`, 2, '0');
}

export function getCurrentDay(date: Date = new Date()) {
  return date.getDay();
}

export function getMonths() {
  return _map(_range(1, 13), value => ({
    value: _padStart('' + value, 2, '0'),
    label: _padStart('' + value, 2, '0'),
  }));
}

export function getYears() {
  const currentYear = parseInt(getCurrentYear(), 0);
  return _map(_range(currentYear, currentYear + 11), value => ({
    value: '' + value,
    label: value,
  }));
}
