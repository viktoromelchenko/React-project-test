import React from 'react'
import ShopProduct from '../Shop/ShopProduct'

 export default function ShopList (props){
     return (
         <ul>
            { props.shop.map( sh => {
               return <ShopProduct sh = { sh }  key={sh.id}/>
            })}
         </ul>
     )
 }