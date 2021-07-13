import React from 'react';
import AdvantageItem from './AdvantageItem';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { render, screen } from '@testing-library/react';

describe('AdventageItem', () => {

    it('Renders the component', () => {
        render(renderWithProviders(<AdvantageItem header="header" content="content" img='assets/icons/star.png' />));
        screen.getByText('header');
        screen.getByText('content');
        const image = screen.getByAltText('header');
        expect(image.src).toContain('http://localhost/assets/icons/star.png');

    })
})