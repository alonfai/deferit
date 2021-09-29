/// <reference types="@testing-library/jest-native" />
import React from 'react';
import { render } from '@testing-library/react-native';

import Loading from './Loading';

describe('<Loading />', () => {
  test('Render successfully', async () => {
    const { getByText, toJSON, findByA11yLabel } = render(<Loading />);
    const loadingText = getByText('Loading Data...');
    const icon = findByA11yLabel('spinner');
    expect(loadingText).toBeTruthy();
    expect(icon).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
