import React from 'react';
import BottomFooter from './BottomFooter';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { render, screen } from '@testing-library/react';

describe('BottomFooter', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<BottomFooter />));
        screen.getByText('Copyright © 2021 all rights reserved');
        screen.getByAltText('visa');
        screen.getByAltText('paypal');
        screen.getByAltText('master card');
        screen.getByAltText('american express');
    })
})