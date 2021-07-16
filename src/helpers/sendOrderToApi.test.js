import { sendOrderToApi } from "./sendOrderToApi";
import { orderConfirmation } from '__mocks__/orderConfirmation';

describe('sendOrderToApi', () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('returns when no userID', async () => {
        const response = await sendOrderToApi();
        expect(response).toBe('You must pass user ID');
    });

    it('returns when no order data', async () => {
        const response = await sendOrderToApi(1);
        expect(response).toBe('You must pass order data');
    });

    it('returns when order data is empty', async () => {
        const response = await sendOrderToApi(1, []);
        expect(response).toBe('Order data is empty');
    });

    it('send order', async () => {
        fetch.mockResponseOnce(JSON.stringify(orderConfirmation));
        const response = await sendOrderToApi(1, orderConfirmation.orderData);
        expect(response.userId).toBe(1);
    });

    it('handle bad request', async () => {
        fetch.mockResponses([JSON.stringify([{}]), { status: 404 }]);
        const response = await sendOrderToApi(1, orderConfirmation.orderData);
        expect(response).toEqual('Something went wrong. Try again.');
    });
})