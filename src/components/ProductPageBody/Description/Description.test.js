import React from 'react';
import Description from './Description';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Description', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Description />));
        screen.getAllByText('description');
    })
})