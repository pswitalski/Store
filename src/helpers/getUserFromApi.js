export const GetUserFromApi = async (userID = 1) => {
    const url = `https://fakestoreapi.com/users/${userID}`;

    try{
        const response = await fetch(url);
        if(!response.ok) {
            const message = 'Something went wrong';
            throw new Error(message);
        }

        const json = response.json();
        return json;

    } catch(err) {
        return err;
    }

}