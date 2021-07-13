import React from 'react';
import Comment from './Comment';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { render, screen } from '@testing-library/react';

import { comment } from 'mocks/comment';

describe('Coment', () => {
    it("Renders the component", () => {
        render(renderWithProviders(<Comment item={comment} />));
        screen.getByText(comment.name);
    })
})