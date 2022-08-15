import React from 'react'
import { useState, useEffect } from 'react';
//import Axios from 'axios';

import {Link} from "react-router-dom";


function List() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const response = await fetch('http://localhost:4000/showDbData', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            });

            const data = await response.json()

            setUsers(data);
        }

        getUsers();
    }, []);

    console.log(users);
    //---------------------------------

      //-----------------------------------

 function onDelete(id){
    //alert(item)
    fetch('http://localhost:4000/postDelete/'+id,{
      method: 'delete',
        headers: {
          accept: 'application/json',
        },
    }).then((res) =>{
      res.json().then((resp) =>{
        alert('Document is deleted successfull')
      }).then(res => { window.location.href = "/list" })
    })
  }

    return (

        <>
            <div className='container text-center'>
            <br></br>

                <h1>Employe data</h1>
                <br></br>
                <table class="table table-responsive table-bordered  w-auto bg-white shadow">
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
                    </thead> {
                        users.map((item,index) => (
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

                                    <td><Link className='btn btn-warning' to={'/edit/'+(item._id)} >edit</Link></td>
                                    <td><button className='btn btn-danger' onClick={() => onDelete(item._id)} >delete</button></td>
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


