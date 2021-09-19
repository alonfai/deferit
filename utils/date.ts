import { getHours, getMinutes, getSeconds, getUnixTime } from 'date-fns';

export function getTimeValue(timestamp: string): string {
  const ts = new Date(timestamp);
  return `${getHours(ts).toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${getMinutes(
    ts
  ).toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${getSeconds(ts).toLocaleString(
    undefined,
    { minimumIntegerDigits: 2 }
  )}`;
}
