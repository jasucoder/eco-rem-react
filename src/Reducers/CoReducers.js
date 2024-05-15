const CountReducer= (state , action)=>{

    if(typeof state == 'undefined'){

        return {
           count : 0
        }
    }

    switch(action.type){

       case 'INCRE':
           return{

                ...state,
                count : action.count
            }

        case 'DECRE':
                return{
    
                 ...state,
                    count : action.count
               }
///mistake is here on default
       default :
        return state
  }

}

export default CountReducer

