import React from 'react';
import ModalHeader from './ModalHeader';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('ModalHeader', () => {
    it('Render the component', () => {
        render(renderWithProviders(<ModalHeader text="text" />));
        screen.getByText('text');
    })
})