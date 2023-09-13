import { BasketItem } from './BasketItem';

function BasketList(props) {
    const { order = [], handleBasketShow = Function.prototype } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.regularPrice * el.quantity;
    }, 0);

    return (
        <ul className='collection basket-list'>
            <li className='collection-item active'>Basket</li>
            {order.length ? (
                order.map((item) => <BasketItem key={item.offerId} {...item} />)
            ) : (
                <li className='collection-item'>Basket is empty</li>
            )}
            <li className='collection-item active'>
                Total Price: $ {totalPrice}
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
