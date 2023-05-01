import { render } from '@testing-library/react';
import NotFound from '../components/notfound';
import '@testing-library/jest-dom/extend-expect';

describe('NotFound', () => {
  it('renders correctly', () => {
    const { container } = render(<NotFound />);
    expect(container).toMatchSnapshot();
  });

  it('renders the correct text', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('OOOOPS! Seems you entered a wrong URL!')).toBeInTheDocument();
  });
});
