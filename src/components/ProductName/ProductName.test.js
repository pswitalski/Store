import React from 'react';
import ProductName from './ProductName';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

import { item } from 'mocks/item';

describe('ProductName', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<ProductName product={item} />));
        screen.getByText(item.title);
    })
})