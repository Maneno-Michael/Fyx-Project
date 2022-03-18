import React from 'react';
import { Formik, Form } from 'formik';
import {Formi} from './Formi';
import * as Yup from 'yup';
import icon from "../../Assets/images/Asset 2.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import './Register.css';
import axios from 'axios';



function AdminRegister() {


const validate = Yup.object({
    fullName: Yup.string()
    .required('Field is required'),
    email: Yup.string()
    .email("Email is invalid")
    .required('Email field is required'),
    password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("password field is required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'password must match')
    . required('confirm password is required'),
})





// Handle the input events

const navigate = useNavigate();

const [reg, setregInput] = useState({
    name:'',
    email:'',
    phone_number:'',
    password:'',
    password_confirmation:'',
    
}); 

const handleIput = (e) => {
    e.persist();
    setregInput({...reg, [e.target.name]: e.target.value})
}

const regSubmit = (e) => {
e.preventDefault();

const details = {
    name: reg.name,
    email: reg.email,
    phone_number: reg.phone_number,
    password: reg.password,
    password_confirmation: reg.password_confirmation,
}
//    console.log(errors); 


axios.post(`/api/register`, details ).then(res =>{
    // console.log('res', res)

    alert("register")
    if(res.status === 200)
    {
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("auth_userName", JSON.stringify(res.data.user));


          navigate('/login');


     }else
    {



    }

});

}







    return ( 
        <Formik
        
        initialValues={{
            fullName:"",
            email:"",
            password:"",
            confirmPassword:"",
        }}
        validationSchema={validate}
        onSubmit={regSubmit}
        >
         {formik => (
                    <div className='whole' style={{marginLeft:"15%",marginTop:"5%"}}>


                        <div style={{float:"right",marginRight:"20%",marginTop:"15%"}}>
                         <img src={icon} alt="" style={{width:"400px", marginTop:"0px", borderRadius:"15px", marginLeft:"170px"}} />
                             
                         </div>


                         <div className='pic' style={{}}>   
                            <img src={icon} alt="" style={{width:"250px", marginTop:"0px", borderRadius:"15px", marginLeft:"170px"}} />
                            <h3 style={{marginLeft:"190px", marginBottom:"60px"}}>Admin Sign up</h3>
                         </div>
         
                         <div className='content'>
                         <div className='social'>
                               
                             <p style={{marginLeft:"8%"}}>Please enter your username and password to <br />
                              sign up as an admin.</p>
                                
                                    <Form style={{ marginLeft:"8%"}}>
                                    < Formi onChange={handleIput} value={reg.email}  style={{ width:"400px",borderRadius:"15px"}} label="name" name="email" type="email"  placeholder="oaknetbusiness@gmail.com" />
                                        
                                        < Formi onChange={handleIput} value={reg.fullName} style={{ width:"400px",borderRadius:"15px", marginTop:"20px"}} label="name" name="fullName" type="text" placeholder="Username" />
                                       < Formi onChange={handleIput} value={reg.password} style={{ width:"400px", marginTop:"20px",borderRadius:"15px"}} label="name" name="password" type="password" placeholder="Password"/>
                                        < Formi onChange={handleIput} value={reg.confirmPassword} style={{ width:"400px", marginTop:"20px",borderRadius:"15px"}} label="name" name="confirmPassword" type="password" placeholder="Confirm Password"/>
                                    
                                        <button text="submit" style={{width:"400px",borderRadius:"15px", marginTop:"20px", paddingtop:"5px",paddingBottom:"5px"
                                        ,border:"1px solid white",background:"#f8b609", color:"white",marginBottom:"10px"}}>Signup</button>

                                    </Form>
                             </div>
                         </div>

                     </div>

                   
         )}

        </Formik>
     );
}

export default AdminRegister;