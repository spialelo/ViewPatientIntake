import React from 'react';
import { render,screen,cleanup } from '@testing-library/react';
import Home from './components/Home';


describe('Testing features related to the Home component', () => {

    
    

    describe('Test homepage has welcome text present', () => {
        beforeEach(() => {
            const { getByText } = render(<Home />);
        });
        
        afterEach(() => {
            cleanup
        });
        
        test('Welcome text on screen', () => {
          const headerElement = screen.getByText(/Welcome to Patient check-in/i);
          expect(headerElement).toBeInTheDocument();
        });
        
        test('Welcome text NOT on screen', () => {
          const headerElement = screen.getByText(/Welcome to Patient check-in/i);
          expect(headerElement).not.toBeInTheDocument();
          // should fail
        });
        
        
        
    });

// test if button element is even present
    describe('Test begin button element is present', () => {
        
        beforeEach(() => {
            const { getByText } = render(<Home />);
        });
        
        afterEach(() => {
            cleanup
        });
        
        test('Button is there', () => {
          const buttonLinkElement = screen.getByText(/Begin check in/i);
          expect(buttonLinkElement).toBeInTheDocument();
        });
     });

  });

// test if the click on button takes the user to expected page - url check
// mock functions needed


