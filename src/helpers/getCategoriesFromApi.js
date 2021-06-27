export const getCategoriesFromApi = async () => {
    const url = 'https://fakestoreapi.com/products/categories';

    try {
        const response = await fetch(url, {method: 'GET'});
        if (response.status !== 200) {
            throw new Error(response.status)
        }
        const json = await response.json();
        return(json);
    } catch(err) {
        alert(err)
    }


}

getCategoriesFromApi()