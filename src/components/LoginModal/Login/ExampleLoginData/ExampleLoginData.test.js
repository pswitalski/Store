import React from 'react';
import { render, screen } from '@testing-library/react';
import ExampleLoginData from './ExampleLoginData';
import { renderWithProviders } from 'helpers/renderWithProviders';
import * as reactRedux from 'react-redux';
import { user } from 'mocks/user';


describe('ExampleLoginData', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

    beforeEach(() => {
        useSelectorMock.mockClear();
        useSelectorMock.mockReturnValue(user);
    });

    it('Renders the component', () => {
        render(renderWithProviders(<ExampleLoginData />));
        screen.getByText('You can use this data:');
    })

    it('Show example email', () => {
        render(renderWithProviders(<ExampleLoginData />));
        screen.getByText(`Email: ${user.data.email}`);
    })


})