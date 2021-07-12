export const sendOrderToApi = async (userId, orderData) => {
    if (!userId) return 'You must pass user ID';
    if (!orderData) return 'You must pass order data';
    if (orderData.length === 0) return 'Order data is empty';

    const url = "https://jsonplaceholder.typicode.com/posts";

    try {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                userId,
                orderData,
            })
        })

        if (!response.ok) {
            const message = 'Something went wrong. Try again.';
            throw new Error(message);
        }

        const json = await response.json();
        return json;

    } catch(err) {
        return err.message;
    }
};