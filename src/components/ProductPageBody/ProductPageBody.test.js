import { describe, it, jest } from '@jest/globals';
import { render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import ProductPageBody from './ProductPageBody';
import { item } from '__mocks__/item';

jest.mock('./Comments/Comments.js', () => {
    return function DummyComments() {
        return(
            <div>Comments</div>
        )
    }
})

describe('ProductPageBody', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<ProductPageBody product={item} />));
    })
})