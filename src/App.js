import React from 'react';
import ItemList from './Item/ItemList'
import Total from './Total/Total'
import ShopList from './Shop/ShopList'
import Context from './context'

function App() {

  const [products,setProduct] = React.useState([
    {id: 1, name: 'pizza', price: 68},
    {id: 2, name: 'juice', price: 12},
    {id: 3, name: 'roll', price: 33},

  ])


  const [shop] = React.useState([
    {id: 4, name: 'salat', price: 47},
    {id: 5, name: 'burger', price: 41},
    {id: 6, name: 'coffe', price: 22}
  ])


  function removeProduct(id) {
    setProduct(products.filter(product => product.id !== id))
  }


  function addProduct(sh){
    setProduct(products.concat([{
      id: sh.id,
      name: sh.name,
      price: sh.price
    }]))
  }


  function incrementCount(product) {
   console.log(product.count)
   product.count = product.count - 1;
  }
  function decrementCount(product) {
    console.log(product.count)
    product.count = product.count + 1;
   }

  return (
    <Context.Provider value={{removeProduct , addProduct,  incrementCount , decrementCount}}>
    <div className="wraper">
        <h1>Basket</h1>
        <ItemList products = { products } />
        <Total products = { products }/>
        <ShopList shop = { shop }/>
    </div>
    </Context.Provider>
    )
  
    
  
}

export default App;
