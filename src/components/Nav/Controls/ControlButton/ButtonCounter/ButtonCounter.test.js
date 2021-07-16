import React from 'react';
import ButtonCounter from './ButtonCounter';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { describe, it } from '@jest/globals';

describe('ButtonCounter', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<ButtonCounter value={5} />));
        screen.getByText('5');
    })
})