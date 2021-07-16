import React from 'react';
import Products from './Products';
import { render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

import { jewelery } from '__mocks__/jewelery';

describe('Products', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Products categoryData={jewelery} />));
    })
})