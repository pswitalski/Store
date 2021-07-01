export const getCommentsFromApi = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            const message = 'Something went wrong';
            throw new Error(message);
        }

        const json = await response.json();
        return json;

    } catch (err) {

        return err;

    }

}