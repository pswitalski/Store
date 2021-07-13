import React from 'react';
import { render, screen } from '@testing-library/react';
import Advantage from './Advantage';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Advantage', () => {
    it('Render the component', () => {
        render(renderWithProviders(<Advantage />));
        screen.getByText('30 days return');
    })
})