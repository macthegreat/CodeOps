import './Dish.css'
import State from '../../../../State'
import PropTypes from 'prop-types'



function Dish({id,name,price,spicy,category}){
    return(
        <div className='card' id={id}>
        <div className='card-name'>
                <h3>{name}</h3>
        </div>
            <p>{price}</p>
            <p>{category}</p>
            {spicy && <strong className='spicy'>spicy</strong>}
            {/* <button><State /></button> */}
        </div>
    )
}
Dish.prototype ={
    id: PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    spicy:PropTypes.bool
}
export default Dish