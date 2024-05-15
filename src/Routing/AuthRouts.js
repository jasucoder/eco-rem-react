import {Route, Routes} from 'react-router-dom'
import Home from '../screens/home';
import About from '../screens/about';
import Contact from '../screens/contact';
import Navbar from '../layout/Navabr';
import ViewProduct from '../screens/ViewProduct';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Forgotpassword from '../screens/Forgotpassword';

// mistick is here please remove comment on functon AuthRouths

function AuthRouts(){


return(

    <>
    
    <Routes>
         <Route path='/' element ={< Login/>} />


         <Route path='/register' element ={< Register/>} />
         <Route path='/login' element ={< Login/>} />
         <Route path='/frgpt' element ={< Forgotpassword/>} />
         
         <Route path='*' element ={< Login/>} />

    </Routes>
    
    </>
)
}

export default AuthRouts