export function reducer(state, { type, payload }) {
    switch (type) {
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.offerId === payload.offerId
            );

            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
            };
        }
        case 'DELETE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((el) => el.offerId !== payload.id),
            };
        case 'INCREMENT_QUANTITY_GOODS_IN_BASKET':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.offerId === payload.id) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'DECREMENT_QUANTITY_GOODS_IN_BASKET':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.offerId === payload.id) {
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity >= 0 ? newQuantity : 0,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'HANDLE_BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };

        default:
            return state;
    }
}
