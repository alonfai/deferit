import * as faker from 'faker';

import { Types } from '../utils';

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
      return 'UnableToPay';
  }
}
