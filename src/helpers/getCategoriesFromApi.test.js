import { getCategoriesFromApi } from "./getCategoriesFromApi";
import { categories } from "__mocks__/categories";

describe('getCategoriesFromApi', () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('returns categories', async () => {
        fetch.mockResponseOnce(JSON.stringify(categories));
        const response = await getCategoriesFromApi();
        expect(response[1]).toBe('jewelery');
    });

    it('return default categories when error', async () => {
        fetch.mockReject('API is down');
        const response = await getCategoriesFromApi();
        expect(response[1]).toBe('jewelery');
    });

    it('return default categories when bad request', async () => {
        fetch.mockResponses([JSON.stringify([{}]), { status: 404 }]);
        const response = await getCategoriesFromApi();
        expect(response[1]).toBe('jewelery');
    })
})