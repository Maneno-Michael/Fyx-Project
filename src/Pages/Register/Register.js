import React from 'react';
import { Formik, Form } from 'formik';
import { Formi } from './Formi';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import back from "../../Assets/images/bgimage.jpeg";
import { FaArrowLeft } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Register.css';
import axios from 'axios';



function Register() {


    const validate = Yup.object({
        name: Yup.string()
            .required('Field is required'),
        email: Yup.string()
            .email("Email is invalid")
            .required('Email field is required'),
        password: Yup.string()
            .min(6, "Password must be atleast 6 characters")
            .required("password field is required"),
            password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'password must match')
            .required('confirm password is required'),
    })

    // Handle the input events

    const navigate = useNavigate();

    const [reg, setregInput] = useState({
        name: '',
        email: '',
        phone_number: '',
        password: '',
        password_confirmation: '',

    });

    const handleIput = (e) => {
        e.persist();
        setregInput({ ...reg, [e.target.name]: e.target.value })
    }

     const regSubmit = (e) => {
        e.preventDefault();

        const details = {
            name: reg.name,
            email: reg.email,
    
            password: reg.password,
            password_confirmation: reg.password_confirmation,
        }
        //    console.log(errors); 


try {
    axios.post(`/api/customers`, details). then (res => {
        // console.log('res', res)

        if (res.status === 200) {


            alert("registered successfully")
            navigate('/login');


        } else {



        }

    });
} catch (error) {
    
    alert("oops, invalid credentials")
}
       

    }







    return (
        <Formik

            initialValues={{
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            }}
            validationSchema={validate}
           
        >
            {formik => (
                <div className='whole' style={{ marginLeft: "15%", marginTop: "10%" }}>
                    <div className='pic' style={{}}>
                        <img src={back} alt="" style={{ width: "600px", float: "left", height: "400px", marginTop: "80px", borderRadius: "15px" }} />
                    </div>

                    <div className='content'>
                        <FaArrowLeft style={{ fontSize: "20px", marginLeft: "50px" }} />
                        <h2 style={{ marginLeft: "50%" }}>Signup</h2>
                        <span style={{ marginLeft: "20%" }}>with</span>
                        <div className='social'>
                            <div>
                                <FaGoogle style={{ marginLeft: "14%", color: "blue", width: "40px", height: "40px", fontSize: "12px", padding: "8px", borderRadius: "50%", border: "1px solid orange" }} />
                                <FaFacebookF style={{ marginLeft: "8%", color: "blue", width: "40px", height: "40px", fontSize: "12px", padding: "8px", borderRadius: "50%", border: "1px solid orange" }} />

                            </div>
                            <span style={{ marginLeft: "20%" }}>Or</span>

                            <p style={{ marginLeft: "55%", marginTop: "20px" }}>Please fill the following details to sign up.</p>

                            <Form   onSubmit={regSubmit}  style={{ float: "left", marginLeft: "8%" }}>
                                < Formi onChange={handleIput} value={reg.name} style={{ width: "400px", borderRadius: "15px" }} label="name" name="name" type="text" placeholder="Full Name" />
                                < Formi onChange={handleIput} value={reg.email} style={{ width: "400px", marginTop: "20px", borderRadius: "15px" }} label="name" name="email" type="email" placeholder="Email" />
                                < Formi onChange={handleIput} value={reg.password} style={{ width: "400px", marginTop: "20px", borderRadius: "15px" }} label="name" name="password" type="password" placeholder="Password" />
                                < Formi onChange={handleIput} value={reg.password_confirmation} style={{ width: "400px", marginTop: "20px", borderRadius: "15px" }} label="name" name="password_confirmation" type="password" placeholder="Confirm Password" />

                                <button text="submit" type='submit' style={{
                                    width: "400px", borderRadius: "15px", marginTop: "20px", paddingtop: "5px", paddingBottom: "5px"
                                    , border: "1px solid white", background: "#f8b609", color: "white", marginBottom: "10px"
                                }}>Signup</button>

                                <p>Do you have an account?<Link style={{ textDecoration: 'none', color: "red", marginLeft: "10px" }} to={"/login"}>Log In </Link></p>
                            </Form>
                        </div>
                    </div>
                </div>
            )}

        </Formik>
    );
}

export default Register;