import { getExchangesFromApi } from "./getExchangeRatesFromApi";
import { currencyEur } from "__mocks__/currency";

describe('getExchangeRateFromApi', () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('returns exchange rate', async () => {
        fetch.mockResponseOnce(JSON.stringify(currencyEur.exchangeRate));
        const response = await getExchangesFromApi('eur');
        expect(response.eur).toBe(0.849285);
    });

    it('handle bad request', async () => {
        fetch.mockResponses([JSON.stringify([{}]), { status: 404 }]);
        const response = await getExchangesFromApi('gbp');
        expect(response).toEqual('Something went wrong. Try again.');
    });

    it('returns pln exchange rate', async () => {
        fetch.mockResponseOnce(JSON.stringify(currencyEur.exchangeRate));
        const response = await getExchangesFromApi('pln');
        expect(response.symbol).toBe('PLN');
    });

    it('returns pln exchange rate', async () => {
        fetch.mockResponseOnce(JSON.stringify(currencyEur.exchangeRate));
        const response = await getExchangesFromApi('gbp');
        expect(response.symbol).toBe('£');
    });

    it('returns pln exchange rate', async () => {
        fetch.mockResponseOnce(JSON.stringify(currencyEur.exchangeRate));
        const response = await getExchangesFromApi('eur');
        expect(response.symbol).toBe('€');
    });

    it('returns pln exchange rate', async () => {
        fetch.mockResponseOnce(JSON.stringify(currencyEur.exchangeRate));
        const response = await getExchangesFromApi('usd');
        expect(response.symbol).toBe('$');
    });
})