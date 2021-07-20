import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import MainBasket from './MainBasket';

describe('MainBasket', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<MainBasket />));
    })
})