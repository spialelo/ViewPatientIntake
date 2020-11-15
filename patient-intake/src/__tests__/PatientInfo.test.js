import React from 'react';
import { render,screen,cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import PatientInfo from '../components/PatientInfo';

// REMINDER:
// Nested components within a component will be difficult to test.
// Test the nested component's functionality separately.
describe('PatientInfo Component', () => {
    
    describe('Test validation of input fields and button', () => {
        beforeEach(() => {
            render(<PatientInfo />);
        });
        
        afterEach(() => {
            cleanup();
        });
        
        
        test('Assert Next button is disabled on initial screen render', () => {
          const nextButton = screen.getByRole('button');
          expect(nextButton).toHaveAttribute('disabled');
        });
        

    });
    
  });
