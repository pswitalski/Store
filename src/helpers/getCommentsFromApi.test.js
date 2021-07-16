import { getCommentsFromApi } from "./getCommentsFromApi";
import { comments } from "__mocks__/comments";

describe('getCommentsFromApi', () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('return comments', async () => {
        fetch.mockResponseOnce(JSON.stringify(comments));
        const response = await getCommentsFromApi(1);
        expect(response[0].name).toBe('id labore ex et quam laborum');
    });

    it('handle error', async () => {
        fetch.mockReject('API is down');

        const response = await getCommentsFromApi(1);
        expect(response).toEqual('API is down');
    });

    it('handle bad request', async () => {
        fetch.mockResponses([JSON.stringify([{}]), { status: 404 }]);
        const response = await getCommentsFromApi(2);
        expect(response).toEqual(Error('Something went wrong'));
    })
})