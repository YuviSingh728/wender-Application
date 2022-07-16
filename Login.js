import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

  const Login = () => {
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
   
  const Sign = async ()=>{
        try {
            let response = await axios.post(
                "https://loanprojectapi.herokuapp.com/api/login",user
            );
            if(response.data.success){
              localStorage.setItem("userToken",response.data.token)
                navigate(`/profile`)
            } else{
                console.log("unable to login")
            }
            console.log(response,"user login response");
        }catch (err){
            console.log("login error", err)
        }
    
      };

  return (
    <div>
        <div className='frm' style={{width:"30%",textAlign:"center",justifyContent:"center",margin:"5% auto",boxShadow:"0px 0px 20px blue",borderRadius:"50px", padding:"3% 3%"}}>
        <h2 class="fw-bold mb-5 fs-2 text-primary">Sign in</h2> 
  <div class="form-outline mb-4">
    <input type="Number" placeholder='Email Or Number' name='number' class="form-control" onChange={getData} />
  </div>
  
  <div class="form-outline mb-4">
    <input type="password" placeholder='Password' name='password' class="form-control" onChange={getData}/>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
     
      <div class="form-check">
        <input class="form-check-input" type="checkbox" checked />
        <label class="form-check-label" > Remember me </label>
      </div>
    </div>

    <div class="col">
      
      <Link to='/mobileVerification'>Forgot password?</Link>
    </div>
  </div>

  
  <button type="button" class="btn btn-primary mb-3" onClick={Sign}>Sign in</button>

  <div class="text-center">
    <p>Not a member? <Link to='/register'>Register</Link></p>
    </div>
        </div>
    </div>
  )
}

export default Login