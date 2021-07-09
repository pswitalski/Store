export const getCategoriesFromApi = async () => {
    const url = 'https://fakestoreapi.com/products/categories';

    const defaultCategories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

    try {
        const response = await fetch(url, {method: 'GET'});
        if (response.status !== 200) {
            throw new Error(response.status)
        }
        const json = await response.json();
        return(json);
    } catch(err) {
        return(defaultCategories);
    }


}

getCategoriesFromApi()