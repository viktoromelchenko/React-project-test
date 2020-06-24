import React from 'react'
import PropTypes from 'prop-types'


function Total(props) {
    return ( 
            <h1>
                {props.products.reduce(function(sum,product){
                    return sum+product.price
                },0)}
            </h1>
            )
            
}

Total.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default Total