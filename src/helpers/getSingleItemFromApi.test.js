import { getSingleItemFromApi } from "./getSingleItemFromApi";
import { item } from '__mocks__/item';

// import fetchMock from 'jest-fetch-mock';

// fetchMock.enableMocks();

describe('getSingleItemFromApi', () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('returns item', async () => {
        fetch.mockResponseOnce(JSON.stringify(item))

        const response = await getSingleItemFromApi(1);
        expect(response.id).toEqual(item.id);
        expect(response.title).toEqual(item.title);
        expect(response.price).toEqual(item.price);
        expect(response.description).toEqual(item.description);
        expect(response.category).toEqual(item.category);
        expect(response.image).toEqual(item.image);
    });

    it('handle error', async () => {
        fetch.mockReject('API is down');

        const response = await getSingleItemFromApi(1);
        expect(response).toEqual('API is down');
    })

    it('handle bad request', async () => {
        fetch.mockResponses([JSON.stringify([{}]), { status: 404 }]);
        const response = await getSingleItemFromApi(1);
        expect(response).toEqual(Error('Something went wrong'));
    })
})