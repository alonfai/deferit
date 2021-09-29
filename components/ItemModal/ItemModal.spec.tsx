/// <reference types="@testing-library/jest-native" />
import React from 'react';
import { render } from '@testing-library/react-native';
import ItemModal from './ItemModal';

const mockGetDevice = jest.fn();
const mockSetShow = jest.fn();
jest.mock('../../utils', () => {
  return {
    helpers: {
      getDevice: () => mockGetDevice(),
    },
  };
});

describe('<ItemModal />', () => {
  test('Render successfully', async () => {
    mockGetDevice.mockReturnValue('Web');
    const { toJSON } = render(
      <ItemModal show setShow={mockSetShow}>
        Hello World
      </ItemModal>
    );
    expect(mockGetDevice).toBeCalled();
    expect(toJSON()).toMatchSnapshot();
  });
});
