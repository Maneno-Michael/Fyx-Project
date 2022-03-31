import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import back from "../../Assets/images/bgimage.jpeg";
import { FaArrowLeft } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Register.css';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';



function Register() {


const navigate = useNavigate();

const [serverError, setServerError] = useState("")
const [loading, setLoading] = useState(false);
const [successResponse,setSuccessResponse]=useState("");
const [errors, seterrors] = useState({});
const [isSub, setsub] = useState(false);
const [reg, setregInput] = useState({
   name: '',
   email: '',
   password: '',
   password_confirmation: '',

    
}); 

const handleIput = (e) => {
    e.persist();
    setregInput({...reg, [e.target.name]: e.target.value})
}

const regSubmit = (e) => {
e.preventDefault();

seterrors(validate(reg));
setsub(true);

const details = {
       name: reg.name,
       email: reg.email,
       password: reg.password,
       password_confirmation: reg.password_confirmation,

}

setLoading(true);
try {
    axios.post(`/api/customers`, details). then (res => {
      setLoading(false); 

        if (res.status === 200) {


          setSuccessResponse("you have been registered successfully.");
          setTimeout(() => {
            setSuccessResponse("")
          }, 3000);

            // alert("registered successfully")
            navigate('/login');

        } else {

        }

    }).catch(res =>{

      setLoading(false);
      setServerError("Invalid credentials plz check them out")
      setTimeout(()=>{
        setServerError("")
      },3000)

      // alert("Invalid credentials or password missmatch")
      navigate('/Register');
    });

} catch (error) {
    
    alert("oops, invalid credentials")
    navigate('/register');
}
       

    }

    useEffect(()=>{
        // console.log(errors);
          if(Object.keys(errors).length === 0 && isSub){
            // console.log(reg);
          }
        },[errors])
        
        
        const validate = ( x  ) =>{ 
        
          const err = {};
          const regrex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;

          if(!x.name){
            err.name =" Name field is required"
          }
          if(!x.password_confirmation){
            err.password_confirmation =" Confirm password field is required"
          }
          if(!x.email){
            err.email =" Email is required"
          }else if( !regrex.test(x.email) )
          {
            err.email =" Not a valid email" 
          }
          if(!x.password){
            err.password =" password is required";
          }else if(x.password.length < 4 )
          {
            err.password =" Must be more than 4 characters"
          }
        
          return err; 
        }



    return (

<div>
        
        
                          <div style={{marginLeft:"30%",marginTop:"-5%",position:"fixed", zIndex:"2"}}>
                                {successResponse && (
                                     <div 
                                     style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#28a745",
                                     borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                     {successResponse}
                                    </div>
                                      
                                 )}
                                   {serverError && (
                                     <div 
                                    style={{color:"white",fontSize:"15px",width:"120%",right:"0", background:"#ED4337",
                                    borderRadius: "15px", paddingTop:"15px",paddingBottom:"15px",paddingLeft:"6%",border:"1px solid lightgray",opacity:"0.7",transition:"0.5"}}>
                                    {serverError}
                                    </div>
                                      
                                 )}
                          </div>       

        <div className='whole' style={{marginLeft:"15%", marginTop:"10%"}}>
        <div className='pic' style={{}}>
           <img src={back} alt="" style={{width:"600px", float:"left", height:"480px", marginTop:"40px", borderRadius:"15px"}} />
        </div>

        <div className='content'>
            <FaArrowLeft style={{fontSize:"20px", marginLeft:"50px"}}/>
            <h2 style={{marginLeft:"50%"}}>Signup</h2>
            <span style={{marginLeft:"20%"}}>with</span>
            <div className='social'>
                   <div> 
                    <FaGoogle style={{marginLeft:"14%", color:"blue",width:"40px",height:"40px", fontSize:"12px",padding:"8px", borderRadius:"50%", border:"1px solid orange"}} />
                    <FaFacebookF style={{marginLeft:"8%", color:"blue",width:"40px",height:"40px", fontSize:"12px",padding:"8px", borderRadius:"50%", border:"1px solid orange"}} />
                    
                    </div>
                <span style={{marginLeft:"20%"}}>Or</span>

                <p style={{marginLeft:"46%", marginTop:"20px"}}>Please fill the following details to sign up.</p>
               


        <form action="" onSubmit={regSubmit}  style={{ float: "left", marginLeft: "8%" }}>
           <div>
           <input onChange={handleIput} value={reg.name} name='name' style={{ width: "400px", marginTop: "20px", borderRadius: "15px", paddingTop:"6px",paddingBottom:"6px",paddingLeft:"10px",border:"1px solid lightgray" }} placeholder="Full name" type="text" />
           </div>
           <p style={{color:"red"}}>{errors.name}</p>
           <div>
           <input onChange={handleIput} value={reg.email} name='email' style={{ width: "400px", borderRadius: "15px", paddingTop:"6px",paddingBottom:"6px",paddingLeft:"10px",border:"1px solid lightgray" }} placeholder="Email" type="email" />
           </div>
           <p style={{color:"red"}}>{errors.email}</p>
           <div>
           <input onChange={handleIput} value={reg.password} name='password' style={{ width: "400px", borderRadius: "15px", paddingTop:"6px",paddingBottom:"6px",paddingLeft:"10px",border:"1px solid lightgray" }} placeholder="password" type="password" />
           </div>
           <p style={{color:"red"}}>{errors.password}</p>
           <div>
           <input onChange={handleIput} value={reg.password_confirmation} name='password_confirmation' style={{ width: "400px", borderRadius: "15px", paddingTop:"6px",paddingBottom:"6px",paddingLeft:"10px",border:"1px solid lightgray" }} placeholder="Confirm password" type="password" />
           </div>
           <p style={{color:"red"}}>{errors.password_confirmation}</p>

           <p style={{ marginLeft: "250px" }}>Forgot Password?</p>

           <div >
{loading&&(

<button text="submit" style={{width:"400px",borderRadius:"15px",  paddingtop:"5px",paddingBottom:"5px"
,border:"1px solid white",background:"#f8b609", color:"white",marginBottom:"10px"}}>
      <div style={{placeItems:"center",display:"grid",top:"50%",transform:"translate Y(50%)"}}>
                 <div style={{display:"flex", flexDirection:"row"}}>
                 <Oval  height="20"
                  width="20"
                  color='white'
                   ariaLabel='loading'/>
             <span style={{fontSize:"20px"}}>please wait</span>
        </div>
    </div>
</button>
)}
{!loading && (
    
    <button text="submit" style={{width:"400px",borderRadius:"15px",  paddingtop:"5px",paddingBottom:"5px"
    ,border:"1px solid white",background:"#f8b609", color:"white",marginBottom:"10px"}}>Signup</button>

)}
</div>
                       <p>Do you have an account?<Link style={{textDecoration:'none', color:"red", marginLeft:"10px"}} to={"/login"}>Log In </Link></p>
                  
       </form>


            </div>
        </div>
    </div>
</div>
);
}

export default Register;

