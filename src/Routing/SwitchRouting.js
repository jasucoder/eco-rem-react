import AuthRouts from "./AuthRouts"
import AllRouts from "./AllRouts"
import { useState } from "react"
import {useSelector } from 'react-redux'


function SwitchRouting(){



//const [auth, setAuth] = useState(localStorage.getItem('auth'))

const auth = useSelector((state)=>state.LoginReducer.login_status ? state.LoginReducer.login_status : false )


return(


    <>
    
     { auth ? <AllRouts/> : <AuthRouts/>  }
    
    
    </>
)


}

export default SwitchRouting