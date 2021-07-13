import React from 'react';
import NameBar from './NameBar';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('NameBar', () => {
    it('Render the component', () => {
        render(renderWithProviders(<NameBar category='text' />));
        screen.getByText('text');
    })
})