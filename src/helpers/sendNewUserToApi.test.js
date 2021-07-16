import { sendNewUserToApi } from "./sendNewUserToApi";
import { newUser } from '__mocks__/newUser';

describe('sendNewUserToApi', () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('send user', async () => {
        fetch.mockResponseOnce(JSON.stringify(newUser));
        const response = await sendNewUserToApi(newUser);
        expect(response.username).toBe('johnSnow');
    });

    it('returns when no user data', async() => {
        const response = await sendNewUserToApi();
        expect(response).toBe('Please pass user data.');
    });

    it('handle bad request', async () => {
        fetch.mockResponses([JSON.stringify([{}]), { status: 404 }]);
        const response = await sendNewUserToApi(newUser);
        expect(response).toEqual('Something went wrong. Try again.');
    });

})