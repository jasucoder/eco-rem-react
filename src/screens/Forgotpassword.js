import axios from "axios"
import { useState } from "react"
import { base_URL } from "../config/baseURL"
import { toast } from "react-toastify"
import Lottie from 'react-lottie';
import * as animationData from '../Assets/loding.js.json'
import { useNavigate } from "react-router-dom";

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  


function Forgotpassword(){

    const navigate = useNavigate()
  
  const [values, setValues] = useState({

   email : "",
   showForm2 : false,
   loading : false,
   otp : "",
   new_pass : "",
   resend : ""


  })




    function handleInput(e){
      setValues({...values , [e.target.name] : e.target.value})

    }

    function handlelogin(){



        var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
        if(! reg.test(values.email)){
            
           toast.error("please enter a Valid Email 21")
        }

        else{
             
            setValues({...values , ['loading'] : true})
            axios.post(base_URL + 'send_otp', values).then((res) =>{
                toast.success(res.data.message)
                setValues({...values , ['loading'] : false , ['showForm2'] : true , ['resend'] : false})
               
                
             }).catch((err)=>{
                toast.error(err.response.data.message)
                setValues({...values , ['loading'] : false })
                 
                 
             })
 


        }
    }

    function handleOtp(){

        setValues({...values , ['loading'] : true})
        axios.post(base_URL + 'verify_otp', values).then((res) =>{
            toast.success(res.data.message)
            setValues({...values , ['loading'] : false , ['showForm2'] : false })
            navigate('/login')
            
         }).catch((err)=>{
            

            if(err.response.data.status == 403){
                setValues({...values , ['loading'] : false , ['resend'] : true})
              
            }
            toast.error(err.response.data.message)

            setValues({...values , ['loading'] : false})
             
             
         })
    }



return(

<>
  {values.loading == true ? 
   <>
   <Lottie options={defaultOptions}
           height={400}
           width={400}
           isStopped={false}
           isPaused={false}/>
           <h4 style={{color : "green" , textAlign : 'center'}}>Pleaswe wait we are fatching data for you</h4>
     </>



:


  <>

    {values.showForm2 == false ?

<div class="login-container">

<button disabled style={{backgroundColor : "balck" , color : "white"}} type="submit" class="btn btn-primary">Reset Your Password</button>
  <br></br>
  <br></br>
  
  <div class="form-group">
    <label for="l1">Email address</label>
    <input type="email"  name='email' onChange={handleInput}    class="form-control" id="l1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  
  <br></br>

  <button onClick={handlelogin} type="submit" class="btn btn-primary">Submit</button>
  <br></br>
  

  </div>


  :

  

  <div class="login-container">

<button disabled style={{backgroundColor : "balck" , color : "white"}} type="submit" class="btn btn-primary">Verify otp</button>
  <br></br>
  <br></br>


  {values.resend == false ?
  <>
  <div class="form-group">
    <label for="l1">Enter Otp </label>
    <input type="number"  name='otp' onChange={handleInput}    class="form-control" id="l1" aria-describedby="emailHelp" placeholder="Enter Otp"/>
    
  </div>
  <div class="form-group">
    <label for="l1">Enter New Password</label>
    <input type="text"  name='new_pass' onChange={handleInput}    class="form-control" id="l1" aria-describedby="emailHelp" placeholder="Enter New Password"/>
    
  </div>
  
  <br></br>
  <button onClick={handleOtp} type="submit" class="btn btn-primary">Submit</button>

  <br></br>
  
   </>
   :

   <>

  <br></br>
  <button onClick={handlelogin} type="submit" class="btn btn-primary">Resend Otp</button>
  <br></br>
   </>
  }
  </div>

  }


 

  </>

}
    </>
)
}

export default Forgotpassword