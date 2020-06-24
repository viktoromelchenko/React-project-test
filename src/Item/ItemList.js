import React  from 'react'
import PropTypes from 'prop-types'
import Product from '../Product/Product'

 function ItemList(props){



    const productsObj = {}

    for (const product of props.products) {
        if (product.name in productsObj){
            productsObj[product.name].count += 1
        }
        else {
            productsObj[product.name] = {
                id: product.id,
                price: product.price,
                count: 1
            }
        }
    }
    let productsArray = [];

    for (const key in productsObj ){
        productsArray.push({
            id: productsObj[key].id,
            name: key,
            price: productsObj[key].price,
            count: productsObj[key].count 
        })
    }

    

  
    console.log(productsArray)
    // // console.log(productsObj)
    // console.log(props.products)

    return (
        
        <table border="1">
            <thead>
               <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                {productsArray.map( (product)=> {
                    return <Product product={ product } key={product.id} />
                })}
    
            </tbody>
        </table>
    )
}

ItemList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ItemList