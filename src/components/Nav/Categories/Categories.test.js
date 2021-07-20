import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import Categories from './Categories';

describe('Categories', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Categories />));
    })
})