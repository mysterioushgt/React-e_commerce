/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO
} from '../constants/CartConstant'

import axios from 'axios'

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/getProductDetail/${id}`);
//    console.log(quantity);
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.productDetail._id,
        name: data.productDetail.name,
        price: data.productDetail.price,
        image: data.productDetail.images.url,
        stock: data.productDetail.stock,
        quantity,
      },
    });
    localStorage.setItem('cartItems' , JSON.stringify(getState().cart.cartItems));
  };

  // SAVE SHIPPING INFO
export const removeCartItem = (id) => async (dispatch, getState) => {

  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
