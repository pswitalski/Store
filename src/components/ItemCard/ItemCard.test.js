import React from 'react';
import ItemCard from './ItemCard';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { render, screen } from '@testing-library/react';

import { item } from '__mocks__/item';

describe('ItemCard', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<ItemCard item={item} />));
        screen.getByText(item.title);
    })
})