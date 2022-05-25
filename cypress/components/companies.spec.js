import * as React from 'react';
import Companies from '../../src/components/company/companies';
import { mount } from '@cypress/react';


it("renders Find a Construction Company", () => {
    mount(<Companies/>);
    cy.contains(/Find a Construction Company/i).should('be.visible');
    cy.get("#search_input").type("Enter a construction company name");
});