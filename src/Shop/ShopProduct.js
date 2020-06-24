import React,{ useContext } from 'react'
import Context from '../context'

export default function ShopProduct ({ sh }){

    const{addProduct} = useContext(Context)

    return (
    <li>{sh.name} , {sh.price} <button onClick={()=>addProduct(sh)}>Add to basket</button></li>
    )
}