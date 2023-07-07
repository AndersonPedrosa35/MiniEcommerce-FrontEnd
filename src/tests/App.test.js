// import axios from 'axios';
import { render, screen } from '@testing-library/react';
import App from '../pages/_app';
// import renderWithRoute from './renderWithRouter';
// import mockValue from './mockValue.json';
// import Home from '../pages/Home';

// jest.mock('axios');
describe('Renders title in App', () => {
  it('should renders title', () => {
    render(<App />);
    const linkElement = screen.getByText(/LINK/i);
    expect(linkElement).toBeInTheDocument();
  });
});

// describe('Renders the cards from request', () => {
  // it('should renders the title of item', () => {
  //   axios.get = (url) => Promise.resolve({
  //     data: mockValue,
  //   })
  //   const { getByText } = renderWithRoute(<Home />);
  //   const text = getByText('eerr');
  //   expect(text).toBeInTheDocument();
  // })
// })
