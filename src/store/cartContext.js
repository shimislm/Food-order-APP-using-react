import React from 'react'

const CartContext = React.createContext({
    item:[],
    totalAmount: 0,
    addItem: (item)=>{},
    removeItem: (_id)=>{},
})
export default CartContext;