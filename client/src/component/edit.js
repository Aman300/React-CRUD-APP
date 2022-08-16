import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';

import { useParams } from "react-router-dom";



function Edit() {

    const params = useParams();


    const url = `/postEdit/${params.id}`
    const [data, setData] = useState({
        fname: "",
        lname: "",
        address: "",
        email: "",
        city: "",
        state: "",
        zip: "",
    })

    function submit(e) {
        e.preventDefault();
        Axios.put(url, {
            fname: data.fname,
            lname: data.lname,
            address: data.address,
            email: data.email,
            city: data.city,
            state: data.state,
            zip: data.zip,

        })
            .then(res => {
                window.alert("data update successfull")
            })
            .then(res => { window.location.href = "/list" })
    }


    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }





    useEffect(() => {
        getEmploerData();
    }, []);

    const getEmploerData = async () => {
        let result = await fetch(`/edit/${params.id}`);
        result = await result.json();
        console.log(result)
        setData(result)
    }



    return (

        <>
            <br></br>
            <br></br>
            <br></br>
            <h2 className='text-center'>Updata Employer detail</h2>
            <div className="container p-2">
                <div className="card border-0 shadow">
                    <div class="card-body">
                        <form onSubmit={(e) => submit(e)}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">First name</label>
                                    <input onChange={(e) => handle(e)} id='fname' value={data.fname} type="text" class="form-control" name='fname' placeholder="first name" required></input>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4">last name</label>
                                    <input onChange={(e) => handle(e)} id='lname' value={data.lname} type="text" class="form-control" name='lname' placeholder="last name" required></input>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input onChange={(e) => handle(e)} id='address' value={data.address} type="text" class="form-control" name='address' placeholder="1234 Main St" required></input>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">E-mail</label>
                                <input onChange={(e) => handle(e)} id='email' value={data.email} type="email" class="form-control" name='email' placeholder="E-mail id" required></input>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input onChange={(e) => handle(e)} id='city' value={data.city} type="text" class="form-control" name='city' required></input>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputState">State</label>
                                    <select onChange={(e) => handle(e)} id='state' value={data.state} name='state' class="form-control" required>
                                        <option selected>Choose...</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Puducherry">Puducherry</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input onChange={(e) => handle(e)} id='zip' value={data.zip} type="number" className="form-control" name='zip' required></input>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-danger">Update</button>
                        </form>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </>

    )
}

export default Edit;


