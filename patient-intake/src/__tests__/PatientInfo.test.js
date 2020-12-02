import React from 'react';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import PatientInfo from '../components/PatientInfo';

// REMINDER:
// Nested components within a component will be difficult to test.
// Test the nested component's functionality separately.
describe('PatientInfo Component', () => {
    
    describe('Test First name, middle name, and last name', () => {
        beforeEach(() => {
        });
        
        afterEach(() => {
            cleanup();
        });
        
        
        test('Assert Next button is disabled on initial screen render', () => {
            const { getByRole } = render(<PatientInfo />);
            expect(getByRole('button')).toHaveAttribute('disabled');
        });
        
        
        test('Assert value entered in First Name input field is the expected value', () => {
            const { getByRole, queryByPlaceholderText } = render(<PatientInfo />);
            const firstNameInput = queryByPlaceholderText("First Name");
            firstNameInput.focus();
            fireEvent.change(firstNameInput, {target: {value: "Christopher"}});
            firstNameInput.blur();
            expect(firstNameInput.value).toBe("Christopher");
            // expect(getByRole('button')).toHaveAttribute('disabled');
        });
        
        
        test('Assert Next button remained disabled because requirements are not met', () => {
            const { getByRole, queryByPlaceholderText } = render(<PatientInfo />);
            const firstNameInput = queryByPlaceholderText("First Name");
            firstNameInput.focus();
            fireEvent.change(firstNameInput, {target: {value: "Christopher"}});
            firstNameInput.blur();
            expect(firstNameInput.value).toBe("Christopher");
            expect(getByRole('button')).toHaveAttribute('disabled');
        });
        
        
        test('Assert leaving First Name input field blank triggers error message rendering', () => {
            const { getByRole, queryByPlaceholderText } = render(<PatientInfo />);
            const firstNameInput = queryByPlaceholderText("First Name");
            firstNameInput.focus();
            firstNameInput.blur();

            expect(firstNameInput.value).toBe("");
            
            const sibling = firstNameInput.nextSibling;
            expect(sibling).toBeVisible();
            expect(sibling).toBeInTheDocument();
            expect(sibling).toHaveClass('invalid-feedback');
            expect(sibling).toHaveTextContent('Field is required.');
        });
        
        test('Leaving Middle Name input field blank should not trigger an error to be displayed', () => {
            const { getByRole, queryByPlaceholderText } = render(<PatientInfo />);
            const middleNameInput = queryByPlaceholderText("Middle Name");
            middleNameInput.focus();
            middleNameInput.blur();

            expect(middleNameInput.value).toBe("");
            
            const sibling = middleNameInput.nextSibling;
            expect(sibling).toBeFalsy();
            expect(sibling).not.toBeInTheDocument();
        });
        
        
        

    });
    
    
    
    describe('Test Phone Number, Email, & Gender Drop down', () => {
        beforeEach(() => {
        });
        
        afterEach(() => {
            cleanup();
        });
        
        
        test('Assert value entered in Phone number input field is the expected value', () => {
            const { getByRole, queryByPlaceholderText } = render(<PatientInfo />);
            const phoneNumInput = queryByPlaceholderText("Phone Number");
            fireEvent.change(phoneNumInput, {target: {value: "1234567890"}});
            expect(phoneNumInput.value).toBe("1234567890");
            // expect(getByRole('button')).toHaveAttribute('disabled');
        });
        
        
        test('Assert Next button remained disabled because requirements are not met', () => {
            const { getByRole, queryByPlaceholderText } = render(<PatientInfo />);
            const firstNameInput = queryByPlaceholderText("First Name");
            fireEvent.change(firstNameInput, {target: {value: "Christopher"}});
            expect(firstNameInput.value).toBe("Christopher");
            expect(getByRole('button')).toHaveAttribute('disabled');
        });
        
        
        test('Assert leaving Phone number input field blank triggers error message rendering', () => {
            const { getByRole, queryByPlaceholderText } = render(<PatientInfo />);
            const phoneNumInput = queryByPlaceholderText("Phone Number");
            phoneNumInput.focus();
            phoneNumInput.blur();

            expect(phoneNumInput.value).toBe("");
            
            const sibling = phoneNumInput.nextSibling;
            expect(sibling).toBeVisible();
            expect(sibling).toBeInTheDocument();
            expect(sibling).toHaveClass('invalid-feedback');
            expect(sibling).toHaveTextContent('Field is required.');
        });
        
        test('Entering a long Phone number in input field should triggers error message rendering', () => {
            const { getByRole, queryByPlaceholderText } = render(<PatientInfo />);
            const phoneNumInput = queryByPlaceholderText("Phone Number");
            
            phoneNumInput.focus();
            fireEvent.change(phoneNumInput, {target: {value: "12345678901"}});
            phoneNumInput.blur();
            expect(phoneNumInput.value).toBe("12345678901");
            
            const sibling = phoneNumInput.nextSibling;
            expect(sibling).toBeVisible();
            expect(sibling).toBeInTheDocument();
            expect(sibling).toHaveClass('invalid-feedback');
            expect(sibling).toHaveTextContent('Maximum length of 10 characters.');
        });
        
        
   

    });
    
    
  });
