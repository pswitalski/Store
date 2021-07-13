import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoItem from './InfoItem';
import { renderWithProviders } from 'helpers/renderWithProviders';
import image from 'assets/icons/star.png';

describe('InfoItem', () => {
    test("renders component", () => {
        render(renderWithProviders(<InfoItem content='Warsaw' alt="city" icon={image} />));
        screen.getByText('Warsaw');
        screen.getByAltText('city');
        const displayImg = document.querySelector('img');
        expect(displayImg.src).toContain(image);
    })
})