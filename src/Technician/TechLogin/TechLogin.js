import React from 'react';
import { Formik, Form } from 'formik';
import {Formi} from './Formi';
import * as Yup from 'yup';
import {Link, Navigate} from "react-router-dom";
import back from "../../Assets/images/bgimage.jpeg";
import { FaArrowLeft } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
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
        localStorage.setItem("auth_userName", JSON.stringify(res.data.user));




        Navigate('/home');

    }else{

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
            onSubmit={loginSubmit}
            >
             {formik => (

                 
                        <div className='whole' style={{marginLeft:"15%", marginTop:"10%"}}>

             
                             <div className='content' style={{float:"left", marginRight:"80px"}}>
                                 <FaArrowLeft style={{fontSize:"20px", marginLeft:"50px"}}/>
                                 <h3 style={{marginLeft:"18%"}}>Login</h3>
                                 <span style={{marginLeft:"55%"}}>with</span>
                                 <div className='social'>
                                        <div style={{marginTop:"10px",marginBottom:"10px"}}> 
                                         <FaGoogle style={{marginLeft:"44%", color:"blue",width:"40px",height:"40px", fontSize:"12px",padding:"8px", borderRadius:"50%", border:"1px solid orange"}} />
                                         <FaFacebookF style={{marginLeft:"8%", color:"blue",width:"40px",height:"40px", fontSize:"12px",padding:"8px", borderRadius:"50%", border:"1px solid orange"}} />
                                         
                                         </div>
                                     <span style={{marginLeft:"55%"}}>Or</span>
    
                                     <p style={{marginLeft:"11.1%", marginTop:"20px"}}>Please enter username and password to log in to your account.</p>
                                    
                                        <Form  style={{float:"left", marginLeft:"8%"}}>
                                            < Formi onChange={handleInput} value={loginInput.email} style={{ width:"100%", marginTop:"20px",borderRadius:"15px"}} label="name" name="email" type="email"  placeholder="Email" />
                                            < Formi onChange={handleInput} value={loginInput.password} style={{ width:"100%", marginTop:"20px",borderRadius:"15px"}} label="name" name="password" type="password" placeholder="Password"/>
                                          
                                           <p style={{marginLeft:"350px"}}>Forgot Password?</p>

                                            <button type="submit" style={{width:"500px",borderRadius:"15px", marginTop:"0px", paddingtop:"5px",paddingBottom:"5px"
                                            ,border:"1px solid white",background:"#f8b609", color:"white",marginBottom:"10px"}}>Login</button>
    
                                            <p>Don't have an account?<Link style={{textDecoration:'none', color:"red", marginLeft:"10px"}} to={"/TechRegister"}>Sign up </Link></p>
                                        </Form>
                                 </div>

                             </div>
                             <div className='pic'>
                                <img src={back} alt="" style={{width:"600px",marginTop:"40px",borderRadius:"15px"}} />
                             </div>
                             
                         </div>

                         
                         
             )}
    
            </Formik>
         );
}

export default Login;