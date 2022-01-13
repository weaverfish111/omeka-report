/**
 *
 * Tests for Input
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Input from '../index';

describe('<Input />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Input />);
    expect(spy).not.toHaveBeenCalled();
  });
  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Input />);
    expect(firstChild).toMatchSnapshot();
  });
});
