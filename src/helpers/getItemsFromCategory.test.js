import { getItemsFromCategory } from "./getItemsFromCategory";
import { jewelery } from "__mocks__/jewelery";
import { beforeEach, expect } from "@jest/globals";

describe("getItemsFromCategory", () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('returns items', async () => {
        fetch.mockResponseOnce(JSON.stringify(jewelery));
        const response = await getItemsFromCategory('jewelery');
        expect(response[0].category).toBe('jewelery');
    });

    it('handle bad request', async () => {
        fetch.mockResponses([JSON.stringify([{}]), { status: 404 }]);
        const response = await getItemsFromCategory('jewelery');
        expect(response).toEqual('Something went wrong');
    })
})