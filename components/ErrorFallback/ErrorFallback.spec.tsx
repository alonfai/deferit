/// <reference types="@testing-library/jest-native" />
import React from 'react';
import { render } from '@testing-library/react-native';

import ErrorFallback from './ErrorFallback';

describe('<ErrorFallback />', () => {
  test('Render successfully', async () => {
    const error = new Error('error');

    const mockResetError = jest.fn();
    const { getByText, getByA11yLabel } = render(
      <ErrorFallback error={error} resetError={mockResetError} />
    );
    const genericError = getByText('Something went wrong:');
    const errorElement = getByText('error');
    const button = getByA11yLabel('Try Again');
    expect(genericError).toBeTruthy();
    expect(errorElement).toBeTruthy();
    expect(button).toBeTruthy();
  });
});
