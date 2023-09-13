function BasketItem(props) {
    const { offerId, displayName, regularPrice, quantity } = props;

    return (
        <li className='collection-item'>
            {displayName} * {quantity} = {regularPrice}
            <span className='secondary-content'>
                <i className='material-icons basket-delete'>close</i>
            </span>
        </li>
    );
}

export { BasketItem };
