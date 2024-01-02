import axios from 'axios'

export const getAllPizzas=()=>dispatch=>{
    dispatch({type:"Get_Pizzas_Request"})

    try{
        const response=axios.get("/api/getpizzas")
        console.log(response)
        dispatch({type:"Get_Pizzas_Success" ,payload:response.data})
    }catch(error){
        dispatch({type:"Get_Pizzas_Failed",payload:error})
    }
}

