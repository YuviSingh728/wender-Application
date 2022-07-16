import React, {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Register.css';


const Register = () => {
var [user, setuser] = useState({});
let navigate = useNavigate();
    function getData(e){
        var name = e.target.name;
        var value = e.target.value;
        setuser((oldData)=>{
            return{
                ...oldData,
                [name]:value
            }
        });
    }
    function postData(e){
        console.log(`First Name= ${user.firstName}\n Last Name= ${user.lastName}\n email= ${user.email}\n Mobile Number= ${user.mobile}\n City= ${user.city}`);
    };  

    const register = async ()=>{
        try {
            let response = await axios.post(
                "https://loanprojectapi.herokuapp.com/api/register",user
            );
            if(response.data.success){
                navigate(`/otpverification?mobile=`+user.mobile)
            } else{
                console.log("unable to register")
            }
            console.log(response,"user register response");
        }catch (err){
            console.log("register error", err)
        }
    };

    
  return (
    <div className='Test'>

    <form>
        <div className='main'>
            <div className='reg'>
                <h2>Register</h2>
                <div className='typ'>
                    <input type="text" placeholder=" Enter your First Name" name='firstName' onChange={getData}/><br></br>
                    <input type="text" placeholder=" Enter your Last Name" name='lastName' onChange={getData}/><br></br>
                </div>
                <div className='nam'>
                
                </div>
                <div className='man'>
                <input type="email" placeholder=' Enter your email ' name='email' onChange={getData}/><br></br>
                <input type="text" placeholder='Enter your mobile number' name='mobile' onChange={getData}/><br></br>
                    <input type="text" placeholder='Enter your city' name='city' onChange={getData}/>
                </div>
        
    
        <div className='btn'>
        <div className='btn1'>
        <Link to="/register">
                    <button onClick={register}>Register</button>
                    </Link>
                    
                </div>
                <div className='btn2'>
                <Link to="/Login">
                    <button>Already have an account <span className='print'>/Sign In</span></button>
                    </Link>
                
                </div>
                </div>
                </div>
                </div>
        </form>
    </div>

  )
}


export default Register