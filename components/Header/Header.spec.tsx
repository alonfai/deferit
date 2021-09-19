import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import Header from './Header';

describe('<Header />', () => {
  it('general', () => {
    const allQuestions = ['q1', 'q2'];
    const mockFn = jest.fn();

    const { getAllByA11yLabel, getByText } = render(
      // <Header questions={allQuestions} onSubmit={mockFn} />
      <Header />
    );
    const answerInputs = getAllByA11yLabel('answer input');

    fireEvent.changeText(answerInputs[0], 'a1');
    fireEvent.changeText(answerInputs[1], 'a2');
    fireEvent.press(getByText('Submit'));

    expect(mockFn).toBeCalledWith({
      '1': { q: 'q1', a: 'a1' },
      '2': { q: 'q2', a: 'a2' },
    });
  });
});
