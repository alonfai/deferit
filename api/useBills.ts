import Constants from 'expo-constants';
import * as faker from 'faker';
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import { Types, helpers, constants } from '../utils';

/**
 * Cache key for storing the bills collection
 */
const QUERY_KEY = 'loadBills';

/**
 * React-Query request context type
 */
type BillQueryKey = [
  key: string,
  item: {
    limit: number;
  }
];

/**
 * React-Query page parameter context type
 */
type BillPageParam = number;

/**
 * Fake API resposne data
 */
type CustomMockResponse = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

/**
 * Transforms the given API response to the app data type
 * @param data given API response
 * @returns Array of mapped data
 */
export function transformResponseToBill(data: CustomMockResponse[]): Types.Bill[] {
  return data.map(item => {
    return {
      amount: faker.datatype.number(),
      date: faker.date.future(),
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
}

/**
 * Fetcher query method for retrieving a given set of bills in any time
 * @param context React-Query request context
 * @returns Async collection of bills
 */
export async function fetchBills(
  context: QueryFunctionContext<BillQueryKey, BillPageParam>
): Promise<Types.Bill[]> {
  if (!Constants.manifest?.extra?.API_URL) {
    throw new Error('Missing API_URL in app manifest');
  }

  const { limit } = context.queryKey[1];
  const start = (context.pageParam ?? 0) * limit;
  // Compose the fetch url with start index and limit value
  const url = `${Constants.manifest.extra.API_URL}?_start=${start}&_limit=${limit}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: CustomMockResponse[] = await response.json();
  const result = transformResponseToBill(data);
  return result;
}

/**
 * Custom hook to retrieve the bills data from a mocked API server
 * @param limit numer of items to retrieve at any given moment
 * @returns Async collection of bills
 */
export default function useBills(limit: number) {
  return useInfiniteQuery<Types.Bill[], Types.ResponseError>([QUERY_KEY, { limit }], fetchBills, {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: (failureCount, error) => {
      // if api request for resouce not found, don't attempt to run a retry request. On other scenarios, try to re-run the request till max retries attempts reached
      return error.status !== constants.STATUS_CODES.NOT_FOUND
        ? failureCount <= constants.MAX_API_RETRIES
        : false;
    },
  });
}
