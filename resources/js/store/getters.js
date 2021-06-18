// export const cartItemCount = (state) => {
//      return state.cart.length;
// }
// 
export const cartTotalPrice = (state) => {
    let total = 0;
    state.cart.forEach(item => {
        total += item.price * item.quantity;
    });

    return total;

}
export const cartTotalPriceWhiteCoupon = (state) => {

    let status = state.check_coupon

    if (status === 'valid') {

        let total_1 = 0;

        state.cart.forEach(item => {
            total_1 += item.price * item.quantity;
        });

        let total_2 = total_1 * 0.10;

        return total_1 - total_2;
        // return total;
    }
}

export const getBeverages = (state) => {
    state.Beverages = state.products.filter(product => {
        return product.category === 'beverage'
    })
}
export const getBurgers = (state) => {
    state.Burgers = state.products.filter(product => {
        return product.category === 'burger'
    })
}
export const getCombos= (state) => {
    state.Combos = state.products.filter(product => {
        return product.category === 'cmeal'
    })
}
