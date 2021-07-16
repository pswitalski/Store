import { GetUserFromApi } from "./getUserFromApi";
import { user } from "__mocks__/user";

describe('getUserFromApi', () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('returns user', async () => {
        fetch.mockResponseOnce(JSON.stringify(user.data));

        const response = await GetUserFromApi(2);
        expect(response.first_name).toBe('John');
        expect(response.last_name).toBe('Snow');
    });

    it('handle error', async () => {
        fetch.mockReject('API is down');

        const response = await GetUserFromApi(2);
        expect(response).toEqual('API is down');
    });

    it('handle bad request', async () => {
        fetch.mockResponses([JSON.stringify([{}]), { status: 404 }]);
        const response = await GetUserFromApi(2);
        expect(response).toEqual(Error('Something went wrong'));
    })

    it('works without userID', async () => {
        fetch.mockResponseOnce(JSON.stringify(user.data));
        await GetUserFromApi();
    })
})