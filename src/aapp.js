import SwitchRouting from "./Routing/SwitchRouting"
import {Provider} from 'react-redux'
import store from "./Store/Store"


function App(){

   store.subscribe(()=>{
        localStorage.setItem('reduxStore', JSON.stringify(store.getState()))
})

    return(
// i import home in return funetion "<home/>""
        <>
        
        
        <Provider store = {store}>
          <SwitchRouting/>
      </Provider> 
       
       
        </>
    )
}

export default App


// this is important part

//<Provider store = {store}>
      //    <SwitchRouting/>
    //   </Provider>  
