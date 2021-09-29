/// <reference types="@testing-library/jest-native" />
import React from 'react';
import { render } from '@testing-library/react-native';

import ItemStatus from './ItemStatus';

describe('<ItemStatus />', () => {
  test('Render successfully', async () => {
    const { toJSON, findByA11yLabel } = render(<ItemStatus status='Processing' />);
    const iconLabel = findByA11yLabel('Status Label');
    expect(iconLabel).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
