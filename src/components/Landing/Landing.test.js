import React from 'react';
import Landing from "./Landing";
import { renderWithProviders } from "helpers/renderWithProviders";
import { render, screen } from "@testing-library/react";

describe('Landing', () => {
    it('Renders the component', () => {
        render(renderWithProviders(<Landing />));
        screen.getByText('Your favourite shop');
        screen.getByText('men');
    })
})