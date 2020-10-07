export const selectAllProducts = state => state.products;

export const selectSelectedProducts =
    state => state.products.filter(product => product.checked)

export const selectSelectedProductTotalPrice =
    state => state.products
        .filter(product => product.checked)
        .reduce((newPrice, item) => { return newPrice + item.price }, 0)
