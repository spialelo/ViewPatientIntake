import React from 'react';
import { render,screen,cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
//@testing-library/jest-dom
import Home from './components/Home';

// Nested components within a component will be difficult to test.
// Test the nested component's functionality separately.
describe('Testing features related to the Home component', () => {


    describe('Test homepage has welcome text present', () => {
        beforeEach(() => {
            const { getByText } = render(<Home />);
        });
        
        afterEach(() => {
            cleanup();
        });
        
        test('Welcome text on screen', () => {
          const headerElement = screen.getByText(/Welcome to Patient check-in/i);
          expect(headerElement).toBeInTheDocument();
        });
        
        test.skip('Welcome text NOT on screen', () => {
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
            cleanup();
        });
        
        test('Check-in intro paragraph present', () => {
          const introCopy = screen.getByText(/identification/i);
          expect(introCopy).toBeInTheDocument();
        });
        
        
        test('Button is on home page', () => {
          const linkElement = screen.getByTestId('begin-button');
          expect(linkElement).toBeInTheDocument();
        });
        
         test.skip('Button click', () => {
          const linkElement = screen.queryByTestId('begin-button');
          userEvent.click(linkElement, {button: 0});
          
          expect(screen.queryByText(/patient information/i)).toBeInTheDocument();
          
        //   const patientPage = await screen.getByText(/patient information/i);
        //   expect(patientPage).toBeInTheDocument();
        });
        
        
     });

  });

// test if the click on button takes the user to expected page - url check
// mock functions needed


