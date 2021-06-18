// export const SET_PRODUCTS =  (state, products) => {
//      state.products = products
// }
// export const VIEW_PRODUCT =  (state, product) => {
//      state.product = product
// }
export const ADD_TO_CART =  (state,{ product, quantity,price,id}) => {
     let productInCart = state.cart.find(item =>{
          return item.id == id;
     })

     if(productInCart){
          productInCart.quantity += quantity;
          return;
     }
     state.cart.push({
          product,
          quantity,
          price,
          id     
     })
}
export const REMOVE_FROM_CART =  (state,{ product, quantity,price,id}) => {
     let productInCart = state.cart.find(item =>{
          return item.id == id;
     })

     if(productInCart){
          productInCart.quantity -= quantity;
          return;

     }
     
     state.cart.push({
          product,
          quantity,
          price,
          id     
     })
}
export const SET_COUPON = ( state, payload) => {
     state.check_coupon = payload
}
export const SET_PRODUCTS = (state, payload) => {
     state.products = payload
}
export const CLEAR_CART_ITEMS = (state) => {
     state.cart = [];
}