import { useEffect, useState } from 'react'
import '../style/cardstyle.css'

import { useNavigate,Link  } from 'react-router-dom'
import { base_URL } from '../config/baseURL.js'
import { useDispatch ,useSelector  } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'





function Home(){

    const navigate = useNavigate()
    const dispatch  = useDispatch()

    const [data , setdata] = useState([])
    const [cartData, setCartData] = useState([])




    const modifyData = ( ) =>{

        let p_data = data;
        let c_data = cartData;

        for(let i=0; i<p_data.length; i++){

            for(let j =0 ; j < c_data.length; j++){

                if(p_data[i]._id == c_data[j].p_id){

                    p_data[i]['disable']= true
                    console.log("yes")
                }
            }
        }
        console.log(p_data)
        return p_data
    }

  const u_id = useSelector((state)=> state.LoginReducer.login_data.u_id)



    function GetAllProduct(){

        fetch( base_URL+ 'get-all-products').then((res)=>res.json()).then((result)=>{
            console.log(result)
            setdata(result.data)
            //console.log(err)
        })
    }



    function handleViewMore(el){

       //console.log(el)

       navigate('/ViewProduct/' +el._id, {state : el})

    }


    function getMyCart(){

        axios.get(base_URL + 'get-my-cart' , {params : {u_id  : u_id}}).then((result)=>{
          console.log(result.data)
          modifyData(data ,result.data.data )
          setCartData(result.data.data)
          dispatch({type : "CART_COUNT" , data : result.data.count})
        })
      }
    



useEffect(()=>{
    GetAllProduct()
    getMyCart()
},[])







const addToCard = (el)=>{
    //console.log(el._id)

    let data = {

        p_id : el._id,
        u_id : u_id

    }



    axios.post(base_URL + 'add-to-cart' , data).then((res)=>{
        toast.success(res.data.message)
        getMyCart()
      }).catch((err)=>{
         toast.error(err.response.data.message)
        
      })

    
}

return(
<>

{modifyData(data).map((el,i)=>(
    <div class="card" style={{width: '18 rem'}}>
        <img src={el.image} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title"> {el.name.length > 20 ? <> <sapn>{el.name.slice(0,20) + "... " }</sapn>  <a style={{fontSize : 12}} href='' onClick={()=>handleViewMore(el)}> view more </a> </>: el.name}</h5>
            <p class="card-text"> {el.description.length > 20 ? <> <sapn>{el.description.slice(0,20) + "... " }</sapn>  <a style={{fontSize : 12}} href='' onClick={()=>handleViewMore(el)}> view more </a> </>: el.description} </p>
            <p class="card-title" style={{fontSize:25 , fontWeight:"bold"}} > {el.discount> 0 ?<span style ={{color:"red" , fontsize: 25 , fontweight:"bolt"}}>-{el.discount} % </span> :" "} &nbsp;
           &#8377; { (Number(el.price) - (Number(el.price) * (Number(el.discount)/100))).toFixed(2)}
            </p>
            <p class="card-title" style={{fontSize:20, fontWeight:"bold"}}> M.R.P.<s> &#8377; {el.price}</s> </p>
            <a style={{ backgroundColor : "purple", color : "white", fontSize : "bold"}} onClick={()=> handleViewMore(el)} class=" btn btn-prime" > view More </a>
           {el.disable == true   ?
             <button style={{marginLeft : 10, backgroundColor : "ligthblue"}}   class=" btn btn-danger" > Already Added</button>
             :

            <a style={{marginLeft : 10, backgroundColor : "lightblue"}} disabled = { true} onClick={()=> addToCard(el)} class=" btn btn-prime" > Add to cart </a>
           }
        
            </div>
    
    </div>


))}
</>
)
}



   


export default Home