/// <reference types="@testing-library/jest-native" />
import React from 'react';
import { render } from '@testing-library/react-native';
import Record from './Record';

describe('<Header />', () => {
  test('Render successfully', async () => {
    const { toJSON } = render(<Record label='' content='' />);
    expect(toJSON()).toMatchSnapshot();
  });
});
