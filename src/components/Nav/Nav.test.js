import { describe, it, jest } from '@jest/globals';
import { render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import Nav from './Nav';

jest.mock('./NavMenu/NavMenu.js', () => {
    return function DummyNavMenu() {
        return(
            <div>NavMenu</div>
        )
    }
})

jest.mock('./Categories/Categories.js', () => {
    return function DummyCategories() {
        return(
            <div>Categories</div>
        )
    }
})

describe('Nav', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Nav />));
    })
})