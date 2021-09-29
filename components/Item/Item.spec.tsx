/// <reference types="@testing-library/jest-native" />
import React from 'react';
import { render } from '@testing-library/react-native';
import { Types } from '../../utils';
import Item from './Item';

const mockGetDevice = jest.fn();
const mockFormatDate = jest.fn();
jest.mock('../../utils', () => {
  return {
    helpers: {
      getDevice: () => mockGetDevice(),
      formatDate: () => mockFormatDate(),
    },
  };
});

describe('<Item />', () => {
  test('Render successfully', async () => {
    mockGetDevice.mockReturnValue('Web');
    mockFormatDate.mockReturnValue('01/01/2022');
    const bill: Types.Bill = {
      id: '1',
      amount: 10,
      date: new Date(2022, 11, 5),
      status: 'Processing',
      url: 'http://www.image.jpg',
      thumbnailUrl: 'http://www.image-thumbnail.jpg',
      extra: {
        name: 'Alon',
        paid: true,
        statusDescription: 'This is a processed bill',
      },
    };
    const { toJSON } = render(<Item item={bill} />);
    expect(mockGetDevice).toBeCalled();
    expect(mockFormatDate).toBeCalled();
    expect(toJSON()).toMatchSnapshot();
  });
});
