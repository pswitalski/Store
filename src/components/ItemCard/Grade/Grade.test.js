import React from 'react';
import Grade from './Grade';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';


describe('Grade', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Grade grade={3} />));
        screen.getAllByAltText("star");
    })

    it('Show correct grade', () => {
        render(renderWithProviders(<Grade grade={3} />));
        const stars = screen.getAllByAltText("star")
        let quantityOfStars = 0;
        stars.forEach(star => {
            if (star.className.includes('gold')) {
                quantityOfStars++;
            }
        })
        expect(quantityOfStars).toBe(3);
    })
})