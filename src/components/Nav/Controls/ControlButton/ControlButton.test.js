import React from 'react';
import ControlButton from './ControlButton';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { describe, expect, it } from '@jest/globals';

describe('ControlButton', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<ControlButton counter={2} />));
    });

    it("hide on mobile", () => {
        render(renderWithProviders(<ControlButton mobile alt="button" />));
        const button = screen.getByAltText('button');
        expect(button).not.toBeVisible();
    })
})