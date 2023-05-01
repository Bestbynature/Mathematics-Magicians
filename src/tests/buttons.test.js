import { render } from '@testing-library/react';
import Buttons from '../components/buttons';
import updateDisplay from '../components/calculator';

describe('Buttons', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Buttons updateDisplay={(e) => updateDisplay(e)} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render 19 buttons', () => {
    const { getAllByRole } = render(<Buttons updateDisplay={(e) => updateDisplay(e)} />);
    expect(getAllByRole('button')).toHaveLength(19);
  });

  it('should render 5 buttons with class operations', () => {
    const { container } = render(<Buttons updateDisplay={(e) => updateDisplay(e)} />);
    const operationsButtons = container.querySelectorAll('.operations');
    expect(operationsButtons).toHaveLength(5);
  });

  it('should render 1 button with class rowspan', () => {
    const { container } = render(<Buttons updateDisplay={(e) => updateDisplay(e)} />);
    const rowspanButton = container.querySelectorAll('.rowspan');
    expect(rowspanButton).toHaveLength(1);
  });
});
