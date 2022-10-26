
import { useReducer } from 'react';
import CartContext from './cartContext';
const defaultCartState={
    item:[],
    totalAmount: 0,
}
const cartReducer = (state , action)=>{
    if(action.type === 'Add Item'){
        const updatedItems = state.items.concat(action._item)
        const updatedAmount = state.totalAmount + action.item.price*action.item.amount;
        return {
            items: updatedItems,
            amount: updatedAmount
        }
    }
    return defaultCartState
};

function CartProvider(props) {
    const [cartState , dispatchCart] =useReducer(cartReducer , defaultCartState)
    
    const addItem = (_item) => { 
        dispatchCart({type:'Add Item', _item: _item})
    }
    const removeItem = (_id) => { 
        dispatchCart({type:'Remove Item', _id: _id})
    }
    const cartContext ={
        item:cartState.item,
        totalAmount: cartState.amount,
        addItem: addItem ,
        removeItem: removeItem,
    }
  return 
    <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider