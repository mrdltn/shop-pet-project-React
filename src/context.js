import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.addToBasket = (item) => {
        dispatch({ type: 'ADD_TO_BASKET', payload: item });
    };
    value.deleteFromBasket = (itemId) => {
        dispatch({ type: 'DELETE_FROM_BASKET', payload: { id: itemId } });
    };
    value.incrementQuantityGoodsInBasket = (itemId) => {
        dispatch({
            type: 'INCREMENT_QUANTITY_GOODS_IN_BASKET',
            payload: { id: itemId },
        });
    };
    value.decrementQuantityGoodsInBasket = (itemId) => {
        dispatch({
            type: 'DECREMENT_QUANTITY_GOODS_IN_BASKET',
            payload: { id: itemId },
        });
    };
    value.handleBasketShow = () => {
        dispatch({
            type: 'HANDLE_BASKET_SHOW',
            payload: {},
        });
    };
    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' });
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
