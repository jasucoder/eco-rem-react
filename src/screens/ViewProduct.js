import{useLocation} from 'react-router-dom'

function ViewProduct(){

   const{ state} = useLocation()
   console.log(state)


    return(

        <div class="card-1" style={{width: '18 rem'}}>
        <img src={state.image} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title"> {state.name}</h5>
            <p class="card-text"> {state.discription} </p>
            <p class="card-title" style={{fontSize:25 , fontWeight:"bold"}}> {state.discount> 0 ?<span style ={{color:"red" , fontsize: 20 , fontweight:"bolt"}}>-{state.discount} % </span> :" "} &nbsp;
            {(Number(state.price)- (Number(state.price)*(Number(state.discount)/100))).toFixed(2)}
            </p>
            <p class="card-title" style={{fontSize:20, fontWeight:"bold"}}> M.R.P.<s> &#8377; {state.price}</s> </p>
            {/*<a onClick={()=> handleViewMore(el)} class="btn-prime"> view More </a>*/}
        </div>
    
    </div>
    )
}

export default ViewProduct