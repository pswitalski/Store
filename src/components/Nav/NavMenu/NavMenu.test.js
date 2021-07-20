import { describe, it, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import NavMenu from './NavMenu';

jest.mock('./BestsellerItem/BestsellerItem.js', () => {
    return function DummyBestsellerItem() {
        return(
            <div>BestsellerItem</div>
        )
    }
})

describe('NavMenu', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<NavMenu />));
        screen.getByText('bestsellers');
    })
})