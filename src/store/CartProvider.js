
import { useReducer } from 'react';
import CartContext from './cartContext';
const defaultCartState={
    items:[],
    totalAmount: 0,
}
const cartReducer = (state , action)=>{
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item)
        const updatedAmount = state.totalAmount + action.item.price*action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    return defaultCartState
};

const CartProvider=(props)=> {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

    const addItem = (_item) => { 
        dispatchCart({type: 'ADD', item:_item})
    }
    const removeItem = (_id) => { 
        dispatchCart({type: 'REMOVE', id:_id})
    }
    const cartContext ={
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItem ,
        removeItem: removeItem,
    };
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
    
};

export default CartProvider