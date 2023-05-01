import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Layout from '../components/layout';

describe('Layout', () => {
  it('renders correctly', () => {
    const { container } = render(/* #__PURE__ */React.createElement(Layout, null));
    expect(container).toMatchSnapshot();
  });

  it('renders the correct text', () => {
    const {
      getByText,
    } = render(/* #__PURE__ */React.createElement(Layout, null));
    expect(getByText('Layout')).toBeInTheDocument();
  });
});
