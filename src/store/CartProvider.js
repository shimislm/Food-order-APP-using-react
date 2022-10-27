
import { useReducer } from 'react';
import CartContext from './cartContext';
const defaultCartState={
    items:[],
    totalAmount: 0,
}
const cartReducer = (state , action)=>{
    if(action.type === 'ADD'){
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const updatedAmount = state.totalAmount + action.item.price*action.item.amount;

        const existingItem = state.items[existingItemIndex];

        let updatedItems;
        
        if(existingItem){
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            updatedItems =[...state.items ]
            updatedItems[existingItemIndex] = updatedItem;
        }else {
            updatedItems = state.items.concat(action.item)
        }
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    if(action.type === 'REMOVE'){
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingItemIndex];
        const updatedAmount = state.totalAmount - existingItem.price
        let updatedItems;
        if(existingItem.amount ===1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        }else{
            const updatedItem = {...existingItem , amount:existingItem.amount -1}
            updatedItems =[...state.items ]
            updatedItems[existingItemIndex] = updatedItem;
        }
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