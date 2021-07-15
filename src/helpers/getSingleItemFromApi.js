export const getSingleItemFromApi = async (id) => {
    const url = `https://fakestoreapi.com/products/${id}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const message = 'Something went wrong';
            throw new Error(message);
        };
        const json = await response.json();
        return json;

    } catch (Error) {
        return Error;
    }
}