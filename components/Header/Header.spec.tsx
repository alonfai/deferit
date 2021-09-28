/// <reference types="@testing-library/jest-native" />
import React from 'react';
import { render } from '@testing-library/react-native';
import Header from './Header';

describe('<Header />', () => {
  test('Render successfully', async () => {
    const { getByText } = render(<Header />);
    const element = getByText('Deferit Bill List');
    expect(element).toBeTruthy();
  });
});
