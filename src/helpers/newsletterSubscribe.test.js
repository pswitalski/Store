import { newsletterSubscribe } from "./newsletterSubscribe";
import { newsletter } from '__mocks__/newsletter';

describe('newsletterSubscribe', () => {

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('subscribe to newsletter', async () => {
        fetch.mockResponseOnce(JSON.stringify(newsletter));
        const response = await newsletterSubscribe('john@snow.com');
        expect(response.title).toBe('newsletter');
        expect(response.email).toBe('john@snow.com');
    });

    it('handle bad request', async () => {
        fetch.mockResponses([JSON.stringify([{}]), { status: 404 }]);
        const response = await newsletterSubscribe('john@snow.com');
        expect(response).toEqual('Something went wrong. Try again.');
    });

    it('returns when email lenght is equal to 0', async () => {
        const response = await newsletterSubscribe('');
        expect(response).toBe('You must enter email');
    });
})