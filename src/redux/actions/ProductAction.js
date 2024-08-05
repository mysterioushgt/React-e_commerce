/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import{
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/ProductConstant'

import axios from 'axios'

export const getProducts = () => async(dispatch) => {
    try{
        dispatch({type: ALL_PRODUCT_REQUEST})
        let link = '/api/products'
        const {data} = await axios.get(link)
        // console.log(data)

        dispatch({
            type : ALL_PRODUCT_SUCCESS,
            payload : data
        })
    }catch(err){
        dispatch({
            type : ALL_PRODUCT_FAIL,
            payload : error.respond.data.message
        })
    }
}
export const getProductDetails = (id) => async(dispatch) => {
    try{
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        let link = `/api/getProductDetail/${id}`

        const { data } = await axios.get(link)
        // console.log(data)
        
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: err.response.data.message
        })
    }
}
export const updateProfile = (formData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        const { data } = await axios.post('/api/updateProfile', formData, config);
        // console.log(data);

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.status,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post('/api/updatePassword', passwords, config);
        console.log(data)

        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data.status,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const resetUpdateProfile = () => async (dispatch) => {
    dispatch({ type: UPDATE_PROFILE_RESET });
};

export const resetUpdatePassword = () => async (dispatch) => {
    dispatch({ type: UPDATE_PASSWORD_RESET });
};

//for clear errors
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type: CLEAR_ERRORS})
}