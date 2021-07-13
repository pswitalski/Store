import React from 'react';
import {render, screen} from '@testing-library/react';
import SocialMediaLink from './SocialMediaLink';
import {renderWithProviders} from 'helpers/renderWithProviders';
import image from 'assets/icons/star.png'

describe('SocialMediaLink', () => {
    test('renders component', () => {
        render(renderWithProviders(<SocialMediaLink icon={image} alt="image" url="https://google.pl/" />));
        screen.getByAltText('image');
        const img = document.querySelector('img');
        const a = document.querySelector('a');
        expect(a.href).toMatch("https://google.pl/")
        expect(img.src).toContain(image);
    })
})