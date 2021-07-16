export const newsletterSubscribe = (email) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    if (email === '') return 'You must enter email';

    const postDataToApi = async () => {

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    title: 'newsletter',
                    email: email
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            });

            if (!response.ok) {
                const message = 'Something went wrong. Try again.';
                throw new Error(message);
            }
            const json = await response.json();
            return json;

        } catch(err) {

            return err.message;
        }
    }
    return postDataToApi();
}