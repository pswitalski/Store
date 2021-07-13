import React from 'react';
import BasketDeleteButton from './BasketDeleteButton';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('BasketDeleteButton', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<BasketDeleteButton />));
        screen.getByAltText('delete');
    })
})