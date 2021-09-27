import { getHours, getMinutes, getSeconds, format } from 'date-fns';
import * as faker from 'faker';

import { Types } from '../utils';

export function getTimeValue(timestamp: string): string {
  const ts = new Date(timestamp);
  return `${getHours(ts).toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${getMinutes(
    ts
  ).toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${getSeconds(ts).toLocaleString(
    undefined,
    { minimumIntegerDigits: 2 }
  )}`;
}

export function formatDate(date: Date, resultFormat = 'dd/MM/yyyy'): string {
  return format(date, resultFormat);
}

export function getRandomStatus(): Types.StatusValues {
  const val = faker.datatype.number({ min: 0, max: 3 });
  switch (val) {
    case 0:
      return 'Schedule';
    case 1:
      return 'Processing';
    case 2:
      return 'Paid';
    case 3:
    default:
      return 'UnableToPay';
  }
}
