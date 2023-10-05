import { useContext } from 'react';
import { ShopContext } from '../context';
import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
    const {
        goods = [],
        // addToBasket = Function.prototype
    } = useContext(ShopContext);

    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodsItem
                    key={item.offerId}
                    {...item}
                    // addToBasket={addToBasket}
                />
            ))}
        </div>
    );
}

export { GoodsList };
