/// <reference types="@testing-library/jest-native" />
import React from 'react';
import { render } from '@testing-library/react-native';
import { Types } from '../../utils';

import ErrorMessage from './ErrorMessage';

describe('<ErrorFallback />', () => {
  test('Render successfully when an error object is provided', async () => {
    const error: Types.ResponseError = {
      message: 'custom message',
      name: 'error',
      status: 400,
      stack: '',
    };

    const { getByText } = render(<ErrorMessage error={error} />);
    const genericError = getByText('custom message');
    expect(genericError).toBeTruthy();
  });

  test('Render null when an error object is undefined/null', async () => {
    const { getByText } = render(<ErrorMessage error={null} />);
    const genericError = getByText('custom message');
    expect(genericError).not.toBeTruthy();
  });
});
