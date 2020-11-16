import React from 'react';
import { render,screen,cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
//@testing-library/jest-dom
import Button from '../components/Button';

// Nested components within a component will be difficult to test.
// Test the nested component's functionality separately.
describe('Testing Button component', () => {


    describe('Button component rendering', () => {
        // beforeEach(() => {
        //     const { getByText, getByTestId } = render(<Button propid="patient-button" label="Begin Check In >>" link="/patient-info" />);
        // });
        
        afterEach(() => {
            cleanup();
        });
        
        test('Render 1', () => {
        const { getByText, getByTestId } = render(<Button propid="patient-button" label="Begin Check In >>" link="/patient-info" />);
        // const handleClick = jest.fn()
         const buttonElement = getByTestId(/patient-button/i);
         expect(buttonElement).toBeInTheDocument();
        });
        

        
    });
 

  });

// test if the click on button takes the user to expected page - url check
// mock functions needed


