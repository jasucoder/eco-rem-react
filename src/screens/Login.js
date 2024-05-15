import { useState } from 'react'
import '../style/login.css'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import { base_URL } from '../config/baseURL'
//import Lottie from 'react-lottie';
//import * as animationData from '../Assets/loding.js.json'


function Login(){

  const dispatch = useDispatch()

    const [values, setValues] = useState({

        email : "",
        password : ""
    })


 


    const handleInput = (e) =>{
      
        setValues({...values , [e.target.name] : e.target.value })

    }


    

    function handlelogin(){
 
      var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
         if(! reg.test(values.email)){

            toast.error("please enter a Valid Email")
        }

         else if(values.password.length <6)
        {
           toast.error("Please Enter Atleast 5 Digit Password ")

        }
         else{
          axios.post(base_URL + 'login' , values).then((res)=>{
            toast.success(res.data.message)
           // console.log(res.data.status)
            if(res.data.status == 200){
              dispatch({type : "LOGIN_SUCCESS", data : res.data.data})
            }
            else{
              dispatch({type : "LOGIN_FAILED", login_data : null})
            }
          }).catch((err)=>{
             toast.error(err.response.data.message)
             dispatch({type : "LOGIN_FAILED", login_error : err.response.data.message})
          })

         } 


        
        //localStorage.setItem('auth', true)
       // window.location.reload()
       //dispatch({type : "LOGIN_SUCCESS", login_data :{}})
    }

return(




    <>
    
    
    <div class="login-container">
  <div class="form-group">
    <label for="l1">Email address</label>
    <input type="email"  name='email' onChange={handleInput}    class="form-control" id="l1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group">
    <label for="l2">Password</label>
    <input type="password"    name='password' onChange={handleInput} class="form-control" id="l2" placeholder="Password"/>
  </div>
  <br></br>

  <button onClick={handlelogin} type="submit" class="btn btn-primary">Submit</button>

  <br></br>
  <i> <h5> Don't have an Account? &nbsp; <Link to='/Register'> Register Here</Link></h5></i><Link style={{fontWeight : "bold" , color : "blue" , cursor : "pointer" , textAlign : "right"}}  to='/frgpt'> Forgot Password ?</Link>

  </div>

    </>
)


}




export default Login