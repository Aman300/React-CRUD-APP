import React from 'react'
import { useState, useEffect } from 'react';
import '../App.css'

import { Link } from "react-router-dom";


function List() {

    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        getData()
    }, []);

    async function getData() {
        setLoader(true);
        setTimeout(async () => {
            const response = await fetch('/showDbData')
            const data = await response.json()
            setUsers(data)
            setLoader(false)
        }, 50);
    }

    //-----------------------------------

    function onDelete(id) {
        fetch('/postDelete/' + id, {
            method: 'delete',
            headers: {
                accept: 'application/json',
            },
        }).then((res) => {
            res.json().then((resp) => {
                alert('Document is deleted successfull')
            }).then(res => getData())
        })
    }

    return (

        <>
            <br></br>
            <br></br>
            <br></br>
            <div className='container text-center'>
                <br></br>

                <h2>Employe data record</h2>
                <br></br>
                <table className="table table-responsive table-bordered  w-auto bg-white shadow">
                    {loader ? <div className="d-flex justify-content-center p-5 m-5">
                        <div className="spinner-border" role="status"> 
                            <span className="visually-hidden"></span>
                        </div>
                    </div>:
                    <thead>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">fname</th>
                            <th scope="col">lname</th>
                            <th scope="col">address</th>
                            <th scope="col">email</th>
                            <th scope="col">city</th>
                            <th scope="col">state</th>
                            <th scope="col">zip</th>
                        </tr>
                    </thead> }{
                        users.map((item, index) => (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.fname}</td>
                                    <td>{item.lname}</td>
                                    <td>{item.address}</td>
                                    <td>{item.email}</td>
                                    <td>{item.city}</td>
                                    <td>{item.state}</td>
                                    <td>{item.zip}</td>

                                    <td><Link className='btn text-white' to={'/edit/' + (item._id)} >edit</Link></td>
                                    <td><button className='btn text-white' onClick={() => onDelete(item._id)} >delete</button></td>
                                </tr>
                            </tbody>
                        ))
                    }
                
                </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </>

    )
}

export default List;


