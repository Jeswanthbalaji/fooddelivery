


export const getAllPizzasReducer = (state={},action)=>{

    switch(action.type)
    {
        case "Get_Pizzas_Request":return {
            ...state
        }

        case "Get_Pizzas_Success":return {
            pizzas : action.payload

        }
        case "Get_Pizzas_Failed":return {
            error : action.payload

        }
        default : return state
    }
}