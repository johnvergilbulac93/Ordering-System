import  axios from 'axios';

export const addOrder = ({commit}, {product, quantity,price,id}) => {
      commit('ADD_TO_CART', {product, quantity,price,id})
}
export const removeOrder = ({commit}, {product, quantity,price,id}) => {
      commit('REMOVE_FROM_CART', {product, quantity,price,id})
}
export const checkCoupon = ({commit},{coupon})=> {
      axios.post('/api/coupon', {coupon: coupon})
      .then( res => {
            commit('SET_COUPON',res.data)
      })
}
export const getProducts = ({commit}) => {
      axios.get('/api/products')
      .then( res => {
            commit('SET_PRODUCTS',res.data)
      })
}
export const placeOrder = ({commit}, {finalOrder}) => {
      axios.post('/api/orders', finalOrder)
      .then( ()=> {
            commit('CLEAR_CART_ITEMS')
            window.location.reload()
      })
}
export const addProduct = ({commit}, {product}) => {
      axios.post('/api/product/save', product)
      .then( ()=> {
      })
}
export const addCoupon = ({commit}, {coupon}) => {
      axios.post('/api/coupon/save', coupon)
      .then( ()=> {
      })
}

