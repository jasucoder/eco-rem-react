import {Route, Routes} from 'react-router-dom'
import Home from '../screens/home';
import About from '../screens/about';
import Contact from '../screens/contact';
import Navbar from '../layout/Navabr';
import ViewProduct from '../screens/ViewProduct';
import MyCart from '../screens/MyCart';
import CheckoutPage from '../screens/Checkout';
import MyOrders from '../screens/MyOrder'



function AllRouts(){


return(

    <>
    <Navbar/>
    <Routes>
         <Route path='/' element ={< Home />} />
         <Route path='/home' element ={< Home/>} />
         <Route path='/about' element ={< About/>} />
         <Route path='/contact' element ={< Contact />} />
         <Route  path='/mycart' element={<MyCart/>} />
         <Route  path='/myorders' element={<MyOrders/>} />
         <Route path='/viewProduct/:id' element ={< ViewProduct />} />
         <Route path='/checkoutPage/:id' element={<CheckoutPage/>}/>
         <Route path='*' element ={< Home/>} />

    </Routes>
    
    </>
)
}

export default AllRouts