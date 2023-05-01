import { render } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('Calculator', () => {
  test('should render correctly', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render the component and update the display on button click', () => {
    const { getByTestId } = render(<Calculator />);
    const displayElement = getByTestId('click').textContent;
    expect(displayElement).toBe(' ');
  });
});
