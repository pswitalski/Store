export const getExchangesFromApi = async (targetCurrency) => {
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${targetCurrency}.json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const message = 'Something went wrong. Try again.';
            throw new Error(message);
        };
        const json = await response.json();

        switch(targetCurrency) {
            case 'pln':
                json.symbol = 'PLN'
                break;
            case 'eur':
                json.symbol = '€';
                break;
            case 'gbp':
                json.symbol = '£';
                break;
            default:
                json.symbol = '$';
        }

        return json;
    } catch(err) {
        return err.message;
    }
}