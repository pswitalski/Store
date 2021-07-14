import React from 'react';
import Grade from './Grade';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';


describe('Grade', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Grade grade={5} />));
        screen.getAllByAltText("star");
    })

    it('Show correct grade', () => {
        render(renderWithProviders(<Grade grade={3} />));
        const stars = screen.getAllByAltText("star");
        let quantityOfStars = 0;
        stars.forEach(star => {
            if (star.className.includes('gold')) {
                quantityOfStars++;
            }
        })
        expect(quantityOfStars).toBe(3);
    })

    it('has the properly src', () => {
        render(renderWithProviders(<Grade grade={4} />));
        const stars = screen.getAllByAltText("star");
        console.log(stars)
        stars.forEach(star => {
            expect(star.src).toBe('http://localhost/star.png');
        })
    })
})