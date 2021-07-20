import { beforeEach, describe, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import Comments from './Comments';
import { comments } from '__mocks__/comments';

describe('Comments', () => {

    beforeEach(() => {
        fetch.resetMocks();
    })

    it('Renders the component', async () => {
        fetch.mockResponseOnce(JSON.stringify(comments));
        render(renderWithProviders(<Comments />));
        await screen.findByText('reviews');
    })
})