import React, { useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import icon from "../../Assets/images/Asset 2.svg";
import { useState } from "react";
import axios from 'axios';


function AdminLogin() {
    const navigate = useNavigate();

    const [errors, seterrors] = useState({});
    const [isSub, setsub] = useState(false);
    const [ loginInput, setLogin] = useState ({
        email: '',
        password: '',
       
    });

    
    const handleInput = (e) =>{
        e.persist();
    
        setLogin({...loginInput, [e.target.name]: e.target.value});
        console.log(loginInput);
    };
        
    const loginSubmit = (e) => {
        e.preventDefault();
    
        seterrors(validate(loginInput));
        setsub(true);
    
        const data ={
            email: loginInput.email,
            password: loginInput.password,
        }
    
    

axios.post(`api/login`, data) .then(res =>{
    if(res.status === 200)
    {
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("auth_name", JSON.stringify(res.data));


        alert("logged in successfully");

        navigate('/admindashboard');

    }else{
        alert("Invalid credentials");

    }

}).catch(res =>{

  alert("Invalid credentials");
});

}


useEffect(()=>{

    // console.log(errors);

      if(Object.keys(errors).length === 0 && isSub){
        // console.log(loginInput);
      }
    },[errors])
    
    
    const validate = ( x  ) =>{ 
    
      const err = {};
      const regrex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;
    
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



            <div className='whole' style={{ marginLeft: "15%", marginTop: "10%" }}>


            <div className='content' style={{ float: "left", marginRight: "80px" }}>
               <div className='social'>
              
               <div className='pic'>
                <img src={icon} alt="" style={{width:"300px",marginTop:"0px",borderRadius:"15px",marginLeft:"100px"}} />
             </div>

                    <p style={{ marginLeft: "11.1%", marginTop: "20px" }}>Please enter username and password to log in to your account.</p>


                <form action="" onSubmit={loginSubmit}  style={{ float: "left", marginLeft: "8%" }}>
                    <div>
                    <input onChange={handleInput} value={loginInput.email} name='email' style={{ width: "100%", marginTop: "5px", borderRadius: "15px", paddingTop:"6px",paddingBottom:"6px",paddingLeft:"10px",border:"1px solid lightgray" }} placeholder="Email" type="email" />
                    </div>
                    <p style={{color:"red"}}>{errors.email}</p>
                    <div>
                    <input onChange={handleInput} value={loginInput.password} name='password' style={{ width: "100%", borderRadius: "15px", paddingTop:"6px",paddingBottom:"6px",paddingLeft:"10px",border:"1px solid lightgray" }} placeholder="password" type="password" />
                    </div>
                    <p style={{color:"red"}}>{errors.password}</p>
                    <p style={{ marginLeft: "350px" }}>Forgot Password?</p>

                <button type="submit" style={{
                    width: "500px", borderRadius: "15px", marginTop: "0px", paddingtop: "5px", paddingBottom: "5px"
                    , border: "1px solid white", background: "#f8b609", color: "white", marginBottom: "10px"
                }}>Login</button>

               </form>


                </div>

            </div>

            <div className='pic'>
                <img src={icon} alt="" style={{width:"400px",marginTop:"10%",borderRadius:"15px"}} />
             </div>

          </div>

         );
}

export default AdminLogin;
