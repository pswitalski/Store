import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import Nav from './Nav';

describe('Nav', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Nav />));
    })
})