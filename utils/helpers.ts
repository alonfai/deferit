import { Platform } from 'react-native';
import { format } from 'date-fns';
import * as faker from 'faker';
import { Types } from '../utils';

/**
 * Format a given date object to a format for displaying
 * @param date given Date
 * @param resultFormat resulting ISO format type
 * @returns string
 */
export function formatDate(date: Date, resultFormat = 'dd/MM/yyyy'): string {
  return format(date, resultFormat);
}

/**
 * Get rendered device information whether its "mobile" or "web" device
 */
export function getDevice() {
  return Platform.OS === 'android' || Platform.OS === 'ios' ? 'Mobile' : 'Web';
}

/**
 * Generate random bill status value used for mocking
 * @returns a device Status Enum value
 */
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
