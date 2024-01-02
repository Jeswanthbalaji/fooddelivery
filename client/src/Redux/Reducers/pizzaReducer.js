// export const reducer=(state,actions)=>{
//   if(actions.type==="increament"){
//          ++state
//   }else if(actions.type==="decreament"){
//           --state
//   }else{
//        state=0
//   }
// }

export const getAllPizzasReducers = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZA_REQUEST":
       return { ...state }
    case "GET_PIZZA_SUCCESS": 
    return { pizzas: action.payload }
    case "GET_PIZZA_FAIL": 
    return { error: action.payload }
    default: return {state}
  }
}
