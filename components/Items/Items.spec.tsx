/// <reference types="@testing-library/jest-native" />
import React from 'react';
import { render } from '@testing-library/react-native';
import Items from './Items';

const mockGetDevice = jest.fn();
const mockUseIntersectionObserver = jest.fn();
jest.mock('../../utils', () => {
  return {
    helpers: {
      getDevice: () => mockGetDevice(),
    },
    useIntersectionObserver: () => mockUseIntersectionObserver(),
    constants: {
      LimitRequestSize: 20,
    },
  };
});

const mockUseBillsQuery = jest.fn();
jest.mock('../../api', () => {
  return {
    useBillsQuery: () => mockUseBillsQuery(),
  };
});

describe('<Items />', () => {
  const fetchNextPageMock = jest.fn();
  const defaultUseBillsQueryResult = {
    data: {
      pages: [],
    },
    isLoading: true,
    error: undefined,
    hasNextPage: false,
    fetchNextPage: fetchNextPageMock,
    isError: false,
  };
  test('Render successfully with Loading state', async () => {
    mockUseBillsQuery.mockReturnValue({
      ...defaultUseBillsQueryResult,
      isLoading: true,
      isError: false,
    });
    const { getByText, toJSON } = render(<Items />);
    expect(mockGetDevice).not.toBeCalled();
    expect(getByText('Loading Data...')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  test('render error with Error object', async () => {
    mockUseBillsQuery.mockReturnValue({
      ...defaultUseBillsQueryResult,
      isLoading: false,
      isError: true,
      error: new Error('Error'),
    });
    const { toJSON, getByText } = render(<Items />);
    expect(mockGetDevice).not.toBeCalled();
    expect(getByText('Error')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  test('Check render <FlatList /> if mobile device is run', async () => {
    mockGetDevice.mockReturnValue('Mobile');
    mockUseBillsQuery.mockReturnValue({
      ...defaultUseBillsQueryResult,
      data: {
        pages: [],
      },
      isLoading: false,
      isError: false,
      error: undefined,
    });
    const { toJSON, getByTestId } = render(<Items />);
    expect(mockGetDevice).toBeCalled();
    expect(getByTestId('Mobile Bill List')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  test('Check render a .map list if web device is run', async () => {
    mockGetDevice.mockReturnValue('Web');
    mockUseBillsQuery.mockReturnValue({
      ...defaultUseBillsQueryResult,
      data: {
        pages: [],
      },
      isLoading: false,
      isError: false,
      error: undefined,
    });
    const { toJSON, getByTestId } = render(<Items />);
    expect(mockGetDevice).toBeCalled();
    expect(getByTestId('Web Bill List')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
