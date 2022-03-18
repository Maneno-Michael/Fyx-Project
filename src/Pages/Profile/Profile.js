import React from 'react';
import { Formik, Form } from 'formik';
import {Formi} from './Formi';
import * as Yup from 'yup';
import { FaCamera } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import "./Profile.css";
import Sidebar from '../../components/Sidebar';
import ProfileNav from '../../components/profileNav';



function Profile() {
    const validate = Yup.object({
        Fname: Yup.string()
        .required('Field is required'),
        Sname: Yup.string()
        .required('Field is required'),
        number: Yup.string()
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
    
        return ( 
            <div>

            <Sidebar/>
            <ProfileNav profile="Nicole" />
            <Formik
            
            initialValues={{
                Fname:"",
                Sname:"",
                number:"",
                email:"",
                password:"",
                confirmPassword:"",
               
            }}
            validationSchema={validate}
            >
             {formik => (
                        
                    <div className="page">
                        <div className="conte" style={{marginLeft:"25%",marginTop:"7%",background:"white", width:"60%", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)" }}>
                           
                        <FaWindowClose style={{float:"right", fontSize:"25px",borderRadius:"50px",marginTop:"10px", marginRight:"5px"}}/>

                            <h3 style={{marginLeft:"20px", paddingTop:"10px", marginBottom:"4%"}}>Edit Profile</h3>
                            
                                         
                                         <div className="wrapper">

                                            <input type="file" className="input" accept='image/*'/>
                                            <FaCamera style={{fontSize:"20px",borderRadius:"5px", marginTop:"75px",marginLeft:"60px", background:"black",color:"white", zIndex:"2"}}/>
                                            </div>
                                        
                                   
                                        <Form style={{ marginLeft:"25%",marginTop:"15px"}}>

                                            <div style={{display:"flex", gap:"10%", marginBottom:"20px",overflow:"wrap" }}>
                                           <Formi label="First name" name="Fname" type="text" style={{background:"#e8e9ed"}}   />
                                           <Formi label="Surname" name="Sname" type="text" style={{background:"#e8e9ed"}} />
                                           
                                            </div>
                                            <Formi label="Phone number" name="number" type="text" style={{width:"208px", marginBottom:"20px" , background:"#e8e9ed"}} />
                                            <Formi label="Email address" name="email" type="email" style={{width:"67.5%", marginBottom:"20px",background:"#e8e9ed"}} />
                                            
                                            <div style={{display:"flex", gap:"10%", marginBottom:"20px"}}>
                                           <Formi label="Password" name="password" type="password" style={{background:"#e8e9ed"}} />
                                           <Formi label="Confirm Password" name="confirmPassword" type="password" style={{background:"#e8e9ed"}} />
                                            </div>

                                            <button type='submit' style={{background:"#f8b609", width:"200px", paddingTop:"3px", paddingBottom:"3px",borderRadius:"20px",
                                             border:"1px solid white",marginLeft:"15%", color:"white",fontSize:"22px", marginBottom:"40px"}}>Update</button>
                                         <BiMessageRounded style={{fontSize:"35px", float:"right",background:"green", color:"white", borderRadius:"50%",
                                          padding:"5px", zIndex:"2",marginTop:"55px",marginRight:"-1.5%"}}/>
                                 </Form>
                                        
                        </div>
                     </div>
                         
             )}
    
            </Formik>
            </div>
         );
}

export default Profile;