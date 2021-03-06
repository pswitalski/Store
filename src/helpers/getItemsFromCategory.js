export const getItemsFromCategory = async (category) => {

    const url = `https://fakestoreapi.com/products/category/${category}`;

    try {
        const response = await fetch(url, {method: 'GET'});
        if (response.status !== 200) {
            throw new Error(response.status)
        }
        const json = await response.json();
        return(json);

    } catch(err) {
        return 'Something went wrong'
    }

}