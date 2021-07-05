export const loginUser = async (data) => {
    if (!data) return 'Please pass user data.'

    const url = 'https://reqres.in/api/login';

    try {
        console.log('try')
        const response = await fetch(url, {
            method:'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                    "email": data.email,
                    "password": data.password
            })
        });

        console.log(response)

        if (!response.ok) {
            const message = 'Email or password invalid.';
            throw new Error(message);
        }

        const json = response.json();
        console.log(json)
        return json;

    } catch(err) {
        return err.message;
    }



}