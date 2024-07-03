/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addItemsToCart, removeCartItem } from '../../redux/actions/CartAction';

function Cart() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isAuthenticated } = useSelector((state) => state.auth);
    
    const { cartItems } = useSelector(state => state.cart)
    // console.log(cartItems)

    const increaseQuantity = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if (stock <= quantity) {
            return;
        }
        dispatch(addItemsToCart(id, newQty));
    };

    const decreaseQuantity = (id, quantity) => {
        const newQty = quantity - 1;
        if (1 >= quantity) {
            return;
        }
        dispatch(addItemsToCart(id, newQty));
    };

    const removeCartHandler = (id) => {
        dispatch(removeCartItem(id))
    }

    const checkoutHandler = () => {
        if (isAuthenticated) {
            navigate('/shipping')
          } else {
            navigate('/login')
          }
    }
    return (
        <>
            {/* BreadCrumb sart */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-12">
                        <nav className="breadcrumb bg-white p-3 mb-3">
                            <a href="#" className="breadcrumb-item nav-link aa">Home</a>
                            <a href="#" className="breadcrumb-item nav-link aa">Shop</a>
                            <span className="breadcrumb-item active">Shopping Cart</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/* shopping cart  start */}
            {
                cartItems.length === 0 ? (
                    <h2>Your Cart is Empty...</h2>

                ) : (
                    <>
                        <div className="container-fluid">
                            <div className="row px-xl-5">
                                <div className="col-lg-8 mb-5 table-responsive">
                                    <table className="table table-borderless text-center mb-0 table-hover">
                                        <thead className="table-dark align-middle">
                                            <tr className="bg-dark">
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody className="align-middle">
                                            {
                                                cartItems.map((cart) => (
                                                    <tr >
                                                        <td className="align-middle">
                                                            <img style={{ width: '50px' }} src={cart.image} alt="" />
                                                            {cart.name}
                                                        </td>
                                                        <td className="align-middle">Rs.{cart.price}</td>
                                                        <td className="align-middle">
                                                            <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                                                                <div className="input-group-btn">
                                                                    <button className="btn btn-sm btn-warning btn-minus" onClick={() => {
                                                                        decreaseQuantity(
                                                                            cart.product,
                                                                            cart.quantity,
                                                                            cart.stock
                                                                        )
                                                                    }}>
                                                                        <i className="fa fa-minus"></i>
                                                                    </button>
                                                                </div>
                                                                <input value={cart.quantity} type="text"
                                                                    className="form-control form-control-sm bg-light border-0 text-center"
                                                                />
                                                                <div className="input-group-btn">
                                                                    <button className="btn btn-sm btn-warning btn-plus" onClick={() => {
                                                                        increaseQuantity(
                                                                            cart.product,
                                                                            cart.quantity,
                                                                            cart.stock
                                                                        )
                                                                    }}>
                                                                        <i className="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="align-middle">Rs. {cart.price * cart.quantity}</td>
                                                        <td className="align-middle">
                                                            <button onClick={() => removeCartHandler(cart.product)}
                                                                className="btn btn-danger">
                                                                <i className="fa fa-times"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-lg-4">
                                    <form action="" className="mb-3">
                                        <div className="input-group">
                                            <input type="text" placeholder="Coupon Code" className="form-control rounded-0 py-2" />
                                            <span className="input-group-append">
                                                <button type="button" className="btn btn-warning rounded-0 py-2">Apply Coupon</button>
                                            </span>
                                        </div>
                                    </form>
                                    <h5 className="text-uppercase text-secondary">Cart summary
                                        <span><hr /></span>
                                    </h5>
                                    <div className="bg-white p-5 mb-3">
                                        <div className="border-bottom">
                                            <div className="d-flex justify-content-between mb-3">
                                                <h6>Subtotal</h6>
                                                <h6>{`₹${cartItems.reduce(
                                                    (acc, val) => acc + val.quantity * val.price,
                                                    0
                                                ).toFixed(2)}`}</h6>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <h6>Shipping</h6>
                                                <h6>Rs.0</h6>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-between mt-3 mb-4">
                                                <h5>Total</h5>
                                                <h5>{`₹${cartItems.reduce(
                                                    (acc, val) => acc + val.quantity * val.price,
                                                    0
                                                ).toFixed(2)}`}</h5>
                                            </div>
                                            <div className="text-center">
                                                <button onClick={checkoutHandler}
                                                className="btn w-100 my-3 py-3 rounded-0 font-weight-bold btn-warning"> Proceed To Cheakout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }


        </>
    )
}

export default Cart