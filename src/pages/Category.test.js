import React from 'react';
import Category from './Category';
import { render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Category Page', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Category />));
    })
})