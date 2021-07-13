import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { render, screen } from '@testing-library/react';

describe('LoadingIndicator', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<LoadingIndicator />));
        screen.getAllByTestId('square');
    })
})