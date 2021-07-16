import { loginUser } from "./loginUser";
import { token } from "__mocks__/token";

describe('loginUser', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('returns when no user data', async () => {
        const response = await loginUser();
        expect(response).toBe('Please pass user data.');
    });

    it('handle login user', async () => {
        fetch.mockResponseOnce(JSON.stringify(token));

        const response = await loginUser({
            email: 'john@snow.com',
            password: 'password'
        });
        expect(response.token).toBe(token.token);
    });

    it('handle bad request', async () => {
        fetch.mockResponses([JSON.stringify([{}]), { status: 404 }]);
        const response = await loginUser({
            email: 'john@snow.com',
            password: 'password'
        });
        expect(response).toEqual('Email or password invalid.');
    });
})