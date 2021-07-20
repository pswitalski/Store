import { describe, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import NavMenu from './NavMenu';

describe('NavMenu', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<NavMenu />));
        screen.getByText('bestsellers');
    })
})