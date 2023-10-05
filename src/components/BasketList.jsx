import { useContext } from 'react';
import { ShopContext } from '../context';
import { BasketItem } from './BasketItem';

function BasketList() {
    // const {
    // order = [],
    // handleBasketShow = Function.prototype,
    // incrementQuantityGoodsInBasket = Function.prototype,
    // decrementQuantityGoodsInBasket = Function.prototype,
    // deleteFromBasket = Function.prototype,
    // } = props;

    const { order = [], handleBasketShow = Function.prototype } =
        useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.regularPrice * el.quantity;
    }, 0);

    return (
        <ul className='collection basket-list'>
            <li className='collection-item active'>Basket</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.offerId}
                        // incrementQuantityGoodsInBasket={
                        //     incrementQuantityGoodsInBasket
                        // }
                        // decrementQuantityGoodsInBasket={
                        //     decrementQuantityGoodsInBasket
                        // }
                        // deleteFromBasket={deleteFromBasket}
                        {...item}
                    />
                ))
            ) : (
                <li className='collection-item'>Basket is empty</li>
            )}
            <li className='collection-item active'>
                Total Price: $ {totalPrice}
                <button className='secondary-content btn-order'>
                    Place an order
                </button>
            </li>
            <i
                className='material-icons basket-close'
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}

export { BasketList };
