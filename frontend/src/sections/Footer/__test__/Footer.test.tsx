import { render, screen } from '@testing-library/react';
import { Footer } from '..';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders footer component', () => {
   render(
      <Router>
         <Footer />
      </Router>
   );
   const footerElement = screen.getByRole('contentinfo');

   expect(footerElement).toBeInTheDocument();
});
