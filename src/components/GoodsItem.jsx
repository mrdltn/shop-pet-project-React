function GoodsItem(props) {
    const {
        offerId,
        displayName,
        displayDescription,
        price: { regularPrice },
        displayAssets: [{ full_background }],
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={full_background} alt={displayName} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            offerId,
                            displayName,
                            regularPrice,
                        })
                    }
                >
                    Buy
                </button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    $ {regularPrice}
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
