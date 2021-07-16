export const sendNewUserToApi = async (data) => {
    if (!data) return 'Please pass user data.';
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(
                {
                    email: data.email,
                    username: data.username,
                    password: data.password
                }
            )
        })

        if (!response.ok) {
            const message = 'Something went wrong. Try again.'
            throw new Error(message);
        }

        const json = await response.json();
        return json;

    } catch (err) {
        return err.message;
    }



}