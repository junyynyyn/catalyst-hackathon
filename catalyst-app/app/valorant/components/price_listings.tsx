import React from 'react'
import {valo_prices, valo_currency_per_dollar, get_lowest_required_value, price_in_money} from '../../price_utils';
import styles from './price_listing.module.css';

const PriceListings = (props: {price: number}) => {
    const listItems = valo_prices.ids.map((id) => 
        <li key={id.toString()}>
            <ul className={styles.priceList}>
                <li className={styles.priceTableComponent}>{valo_prices.premium[id]}</li>
                <li className={styles.priceTableComponent}>${valo_prices.cost[id]}</li>
                <li className={styles.priceTableComponent}>${valo_currency_per_dollar(id).toFixed(2)}</li>
                <li className={styles.priceTableComponent}>${price_in_money(props.price, id).toFixed(2)}</li>
                <li className={styles.priceTableComponent}>{valo_prices.premium[id] - props.price}</li>

            </ul>
        </li>
    );
    return (
        <div>
            <ul>
                <li></li>
            </ul>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default PriceListings