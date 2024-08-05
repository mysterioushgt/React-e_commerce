/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Link,} from 'react-router-dom'
import {MDBDataTable}  from 'mdbreact'
import MetaData from '../layout/MetaData';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from './Sidebar'
import Loading from '../layout/Loading';
import { clearErrors } from '../../redux/actions/UserAction';
import { getCategory } from '../../redux/actions/CategoryAction';


function CategoryList() {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, categories } = useSelector(state => state.cat)
    // console.log(products)

    useEffect(() => {
        dispatch(getCategory())
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
    }, [dispatch.alert, error])
    const setCategory = () => {
        const data = {
            columns: [
                {
                    label: 'Id',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'

                },
                {
                    label: 'Image',
                    field: 'image',
                    sort: 'asc'

                },
                {
                  label: 'Actions',
                  field: 'actions',


              },
            ],
            rows: []
        }
        categories.forEach(category => {
            data.rows.push({
                id: category._id,
                name: category.name,
                image: <img src={category.image.url} width={'100'}></img>,

                actions:
                    <>
                        <Link to={`/admin/category/${category._id}`} className='btn btn-primary py-1 px-2'>
                            <i className="fa fa-pencil"></i>
                        </Link>
                        <button className="btn btn-danger py-1 px-2 ml-2">
                            <i className="fa fa-trash"></i>
                        </button>
                    </>

            })
        })
        return data;
    }
    return (
        <>
         <MetaData title={'Category'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-10">
                    <h1 className="my-5">All Category</h1>
                    {loading ? <Loading /> : (
                        <MDBDataTable
                            data={setCategory()}
                            className='px-3'
                            bordered
                            striped
                            hover


                        />

                    )}
                </div>
            </div>
        </>
    )
}

export default CategoryList