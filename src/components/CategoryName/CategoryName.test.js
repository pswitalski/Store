import React from 'react';
import CategoryName from './CategoryName';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('CategoryName', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<CategoryName category="test" />));
        screen.getByText('test');
    })
})