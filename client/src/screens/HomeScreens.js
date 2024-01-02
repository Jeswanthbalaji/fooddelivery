import React from 'react'
import data from "../Data.json"
import PizzaCart from '../components/PizzaCart'
const HomeScreens = () => {
  return (
    <div className='' >

  <div className='row mt-4 ms-4'>
    {
        data.map((pizzas)=>{
            return(<div className='col-md-4'>

                <PizzaCart jeswanth ={pizzas}/>
            </div>)
        })
    }
  </div>

    </div>
  )
}

export default HomeScreens