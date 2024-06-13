/* eslint-disable no-unused-vars */
import{
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    CLEAR_ERRORS
} from '../constants/CategoryConstant'
import axios from 'axios'

export const getCategory = () => async(dispatch) => {
    try {
        dispatch({type: ALL_CATEGORY_REQUEST})
        let link = 'https://apiecommerce-i1jx.onrender.com/api/getAllCategories'
        const {data} = await axios.get(link)
        // console.log(data)

        dispatch({
            type : ALL_CATEGORY_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type : ALL_CATEGORY_FAIL,
            payload : error.respond.data.message
        })
    }

}