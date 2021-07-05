export const getExchangesFromApi = async (targetCurrency) => {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${targetCurrency}.json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const message = 'Something went wrong. Try again.';
            throw new Error(message);
        };
        const json = await response.json();
        return json;
    } catch(err) {
        return err.message;
    }
}