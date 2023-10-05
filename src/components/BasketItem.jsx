import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
    const {
        offerId,
        displayName,
        regularPrice,
        quantity,
        deleteFromBasket = Function.prototype,
        incrementQuantityGoodsInBasket = Function.prototype,
        decrementQuantityGoodsInBasket = Function.prototype,
    } = props;

    const { example } = useContext(ShopContext);
    console.log(example);

    return (
        <li className='collection-item'>
            {displayName}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => decrementQuantityGoodsInBasket(offerId)}
            >
                remove
            </i>{' '}
            x {quantity}{' '}
            <i
                className='material-icons basket-quantity'
                onClick={() => incrementQuantityGoodsInBasket(offerId)}
            >
                add
            </i>{' '}
            = {regularPrice * quantity}
            <span
                className='secondary-content'
                onClick={() => deleteFromBasket(offerId)}
            >
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    );
}

export { BasketItem };
