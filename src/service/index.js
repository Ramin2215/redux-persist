export const allFetch = {
    GET_PRODUCTS: async function () {
        try {
            const data = await fetch("https://fakestoreapi.com/products")
            const result = await data.json();
            return result;
        } catch (e) {
            return e?.message ?? "Failed to fetch"

        }
    }
}