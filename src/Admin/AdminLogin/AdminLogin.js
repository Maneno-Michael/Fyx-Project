import React from 'react';
import { Formik, Form } from 'formik';
import {Formi} from './Formi';
import * as Yup from 'yup';
import {Link, useNavigate} from "react-router-dom";

import icon from "../../Assets/images/Asset 2.svg";
import { useState } from "react";
import axios from 'axios';







function Login() {


    const validate = Yup.object({
        email: Yup.string()
        .email("Email is invalid")
        .required('Email field is required'),
        password: Yup.string()
        .min(6, "Password must be atleast 6 characters")
        .required("password field is required"),
 
    })

    const navigate = useNavigate();

// post events.

const [ loginInput, setLogin] = useState ({
    email: '',
    password: '',
   
});

const handleInput = (e) =>{
    e.persist();

    setLogin({...loginInput, [e.target.name]: e.target.value});
}
    
const loginSubmit = (e) => {
    e.preventDefault();

    const data ={
        email: loginInput.email,
        password: loginInput.password,
    }


axios.post(`api/login`, data) .then(res =>{
    if(res.status === 200)
    {
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("auth_name", JSON.stringify(res.data.user));


        alert("logged in successfully");

        navigate('/profile');

    }else{
        alert("Invalid credentials");

        navigate('/login');
    }

});

}





        return ( 

            
            <Formik
            
            initialValues={{
               
                email:"",
                password:"",
               
            }}
            validationSchema={validate}
            
            >
             {formik => (

                 
                        <div className='whole' style={{marginLeft:"15%", marginTop:"10%"}}>

             
                        <div style={{marginTop:"10%"}}>
                         <img src={icon} alt="" style={{width:"300px", marginTop:"0px", borderRadius:"15px", marginLeft:"170px",marginBottom:"40px"}} />
                             
                         </div>

                             <div className='content' style={{float:"left", marginRight:"80px"}}>
                                <div className='social'>
                       
                                     <p style={{marginLeft:"20%", marginTop:"20px"}}>Please enter username and password to log in as an admin.</p>
                                    
                                        <Form onSubmit={loginSubmit} style={{float:"left", marginLeft:"22%"}}>
                                            < Formi onChange={handleInput} value={loginInput.email} style={{ width:"400px", marginTop:"0px",borderRadius:"15px"}} label="name" name="email" type="email"  placeholder="Email" />
                                            < Formi onChange={handleInput} value={loginInput.password} style={{ width:"400px", marginTop:"20px",borderRadius:"15px"}} label="name" name="password" type="password" placeholder="Password"/>
                                          
                                            <p style={{marginLeft:"245px",color:"orange"}}>Forgot Password?</p>

                                            <button type="submit" style={{width:"400px",borderRadius:"15px", marginTop:"0px", paddingtop:"5px",paddingBottom:"5px"
                                            ,border:"1px solid white",background:"#f8b609", color:"white",marginBottom:"10px"}}>Login</button>
    
                                       </Form>
                                 </div>

                             </div>
                             <div className='pic'>
                                <img src={icon} alt="" style={{width:"400px",marginTop:"20px",borderRadius:"15px"}} />
                             </div>
                             
                         </div>

                         
                         
             )}
    
            </Formik>
         );
}

export default Login;