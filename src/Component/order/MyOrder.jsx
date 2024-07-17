/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
import {MDBDataTable}  from 'mdbreact'
import { useDispatch , useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { myOrders } from '../../redux/actions/OrderAction'
import { useEffect } from 'react'
function MyOrder() {
  const alert =useAlert();
    const dispatch =useDispatch();

    const {error,orders} =useSelector(state=>state.myOrders)
    console.log(orders)

    useEffect(()=>{
        dispatch(myOrders())
        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }
    },[dispatch.alert,error])
  return (
    <div>MyOrder</div>
  )
}

export default MyOrder