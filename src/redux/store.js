import { createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoriesReducer } from './reducers/CategoryReducer';
import { productDetailsReducer, productReducer } from './reducers/ProductReducer';
import { cartReducer } from './reducers/CartReducer';
import { sliderReducer } from './reducers/SliderReducer';
import { userRegisterReducer } from './reducers/UserReducer';
import { myOrdersReducer, newOrderReducer } from './reducers/OrderReducer';


const reducer = combineReducers({
    cat : categoriesReducer,
    pro : productReducer,
    pDetail : productDetailsReducer,
    cart : cartReducer,
    Sli : sliderReducer,
    auth : userRegisterReducer,
    newOrder : newOrderReducer,
    myOrders : myOrdersReducer
   

})

let initializeState = {
    cart :{
        cartItems : localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    }
}

const Store = createStore(reducer, initializeState, composeWithDevTools(applyMiddleware(thunk)))

export default Store