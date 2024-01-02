// export const incr=()=>{
//     return {
//         type:"increament"
//     }
// }
// export  const dec=()=>{
//     return {
//         type:"decreament"
//     }
//  }

// export const reset=()=>{
//     return{
//         type:"reset"
//     }
// }
import { axios } from "axios"

const getallpizzas = () => dispatch => {

    dispatch({ type: "GET_PIZZA_REQUEST" })

    try {
        const axiosconnection = axios.get("/api/getpizzas")
        console.log(axiosconnection)
        dispatch({ type: "GET_PIZZA_SUCCESS", payload: axiosconnection.data })
    } catch (error) {
        dispatch({ type: "GET_PIZZA_FAIL", payload: error })
    }
}