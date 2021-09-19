import * as faker from 'faker';
import { useQuery } from 'react-query';

import { Types, constants, helpers } from '../utils';

export const QUERY_KEY = 'loadBills';

type CustomMockResponse = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

async function fetchBills(): Promise<Types.Bill[]> {
  const response = await fetch(constants.API_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: CustomMockResponse[] = await response.json();
  const result: Types.Bill[] = data.map(item => {
    return {
      amount: faker.datatype.number(),
      date: faker.date.future().toUTCString(),
      id: item.id.toString(),
      status: helpers.getRandomStatus(),
      thumbnailUrl: item.thumbnailUrl,
      url: item.url,
      extra: {
        name: faker.name.findName(),
        paid: Math.random() < 0.5,
        statusDescription: item.title,
      },
    };
  });
  return result;
}

export default function useBills() {
  return useQuery<Types.Bill[], Error>([QUERY_KEY], fetchBills);
}
