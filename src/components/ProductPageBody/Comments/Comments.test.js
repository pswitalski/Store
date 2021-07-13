import React from 'react';
import Comments from './Comments';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { render, screen } from '@testing-library/react';

describe('Comments', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Comments />));
        screen.getByText('reviews');
    })
})