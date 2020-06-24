import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

function Product({ product }) {


const styles = {
    input: {
        width: '40px'
    }
}




const{ removeProduct } = useContext(Context)
const{ incrementCount } = useContext(Context)
const{ decrementCount } = useContext(Context)

return (   
               <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><button onClick={()=> incrementCount(product)}>&lt;</button>
                    <input
                    style={styles.input}
                    value={product.count} 
                    onChange={(value)=>product.count}
                    />
                    <button onClick={()=> decrementCount(product)}>&gt;</button></td>
                    <td><button onClick={()=>removeProduct(product.id)}>&times;</button></td>
                </tr>
 
        )
 
}

Product.propTypes = {
    product: PropTypes.object.isRequired
}



export default Product