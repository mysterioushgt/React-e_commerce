import { createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoriesReducer } from './reducers/CategoryReducer';
import { productDetailsReducer, productReducer } from './reducers/ProductReducer';
import { cartReducer } from './reducers/CartReducer';
import { sliderReducer } from './reducers/SliderReducer';
import { userRegisterReducer } from './reducers/UserReducer';

const reducer = combineReducers({
    cat : categoriesReducer,
    pro : productReducer,
    pDetail : productDetailsReducer,
    cart : cartReducer,
    Sli : sliderReducer,
    auth : userRegisterReducer

})

let initializeState = {
    cart :{
        cartItems : localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : []
    }
}

const Store = createStore(reducer, initializeState, composeWithDevTools(applyMiddleware(thunk)))

export default Store