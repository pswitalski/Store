import React from 'react';
import Sale from './Sale';
import { render,screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Sale', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Sale text="text" header="header" span="span" />));
        screen.getByText('header');
        screen.getByText('text');
        screen.getByText('span');
    })
})