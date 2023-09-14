function BasketItem(props) {
    const {
        offerId,
        displayName,
        regularPrice,
        quantity,
        deleteFromBasket = Function.prototype,
    } = props;

    return (
        <li className='collection-item'>
            {displayName} * {quantity} = {regularPrice * quantity}
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
