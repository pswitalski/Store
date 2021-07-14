import React from 'react';
import Home from './Home';
import { render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';


describe('Home Page', () => {

    it('Renders the component', () => {
        render(renderWithProviders(<Home />));
    })
})