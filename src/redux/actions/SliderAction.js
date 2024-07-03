/* eslint-disable no-unused-vars */
import{
    ALL_SLIDER_REQUEST,
    ALL_SLIDER_SUCCESS,
    ALL_SLIDER_FAIL,
    CLEAR_ERRORS
} from '../constants/SliderConstant'
import axios from 'axios'

export const getSlider = () => async(dispatch) => {
    try {
        dispatch({type: ALL_SLIDER_REQUEST})
        let link = '/api/slider'
        const {data} = await axios.get(link)
        // console.log(data)

        dispatch({
            type : ALL_SLIDER_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type : ALL_SLIDER_FAIL,
            payload : error.respond.data.message
        })
    }

}