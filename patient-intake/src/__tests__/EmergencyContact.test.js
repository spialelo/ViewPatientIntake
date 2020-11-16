import React from 'react';
import { HashRouter as Router, Link, withRouter } from 'react-router-dom';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory, createLocation } from 'history';
import '@testing-library/jest-dom';
import EmergencyContact from '../components/EmergencyContact';

// REMINDER:
// Nested components within a component will be difficult to test.
// Test the nested component's functionality separately.
describe('EmergencyContact Component', () => {
    
    describe('Test validation of input fields and button', () => {
        beforeEach(() => {
        });
        
        afterEach(() => {
            cleanup();
        });
        
        
        test('Assert Next button is disabled on initial screen render', async () => {
            const history = createMemoryHistory();
            const state = {
               patient: {"patient_middle_name":"crackle",
                "patient_emailid":"ricekrispies@kelloggs.com",
                "patient_address_line_2":"",
                "patient_first_name":"snap",
                "patient_last_name":"pop",
                "patient_contact_number":"74655966",
                "patient_sex":"M",
                "patient_ssn":"726596595",
                "patient_dob":"1980-10-01",
                "patient_address_line_1":"2 Lane Drive",
                "patient_address_city":"Somewheresville",
                "patient_address_state":"NE",
                "patient_zip_code":"78561"}
            };
            
            // const location = createLocation('/emergency-contact');
            let location2 = {};
            location2.state = state;
            
            history.push("/emergency-contact", state);
            
            const { getByRole } = await render(
                    <EmergencyContact history={history} location={location2} />
                );
            expect(getByRole('button' )).toHaveAttribute('disabled');
        });
        

    });
    
  });
