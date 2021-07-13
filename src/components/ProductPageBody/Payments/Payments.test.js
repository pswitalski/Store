import React from 'react';
import Payments from './Payments';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Payments', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Payments />));
        screen.getByText('guaranteed safe checkout');
    })
})