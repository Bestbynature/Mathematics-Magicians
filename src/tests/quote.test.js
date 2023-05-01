import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quotes from '../components/quote';
import '@testing-library/jest-dom/extend-expect';

describe('Quotes component', () => {
  test('renders a quote', () => {
    const component = renderer.create(<Quotes />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays a loading message when quotes are being fetched', () => {
    render(<Quotes />);
    const loadingElement = screen.getByText('Your quote is loading ...');
    expect(loadingElement).toBeInTheDocument();
  });

  it('displays a random quote after fetching quotes successfully', async () => {
    const fakeQuote = 'The only way to do great work is to love what you do. - Steve Jobs';
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => [{ quote: fakeQuote }],
    });
    render(<Quotes />);
    await waitForElementToBeRemoved(() => screen.getByText('Your quote is loading ...'));
    const quoteElement = screen.getByText(fakeQuote);
    expect(quoteElement).toBeInTheDocument();
  });

  it('displays an error message if fetching quotes fails', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error());
    render(<Quotes />);
    await waitForElementToBeRemoved(() => screen.getByText('Your quote is loading ...'));
    const errorElement = screen.getByText('There is an error! try again.');
    expect(errorElement).toBeInTheDocument();
  });
});
