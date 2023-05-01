import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App';
import '@testing-library/jest-dom/extend-expect';
import Quotes from '../components/quote';
import NotFound from '../components/notfound';

describe('App', () => {
  it('renders the header with links', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const homeLink = screen.getByRole('link', { name: /home/i });
    const calculatorLink = screen.getByRole('link', { name: /calculator/i });
    const quoteLink = screen.getByRole('link', { name: /quote/i });
    expect(homeLink).toBeInTheDocument();
    expect(calculatorLink).toBeInTheDocument();
    expect(quoteLink).toBeInTheDocument();
  });

  it('renders the home page by default', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const homePage = screen.getByRole('heading', { name: /welcome to our page!/i });
    expect(homePage).toBeInTheDocument();
  });

  //

  it('navigates to quote page when quote link is clicked', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const quoteLink = screen.getByRole('link', { name: /quote/i });
    userEvent.click(quoteLink);
    const { getByRole } = render(<Quotes />);
    const quotePage = getByRole('heading');
    expect(quotePage).toBeInTheDocument();
  });

  it('renders not found page when URL is unknown', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>,
    );
    const { getAllByRole } = render(<NotFound />);
    const notFoundPage = getAllByRole('heading')[0];
    expect(notFoundPage).toBeInTheDocument();
  });
});
