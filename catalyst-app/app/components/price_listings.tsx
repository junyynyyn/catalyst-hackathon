import React from 'react'
import { get_prices, currency_per_dollar, get_lowest_required_value, price_in_money} from '../price_utils';
import styles from './price_listing.module.css';

const PriceListings = async (props: {price: number, game_name: string}) => {
    const valo_prices = await get_prices(props.game_name);
    const listItems = Array.from(Array(valo_prices.currency.length).keys()).map(async (id: any) => {
        const item_price = (await price_in_money(props.price, id, props.game_name)).toFixed(2);
        const per_dollar = (await currency_per_dollar(id, props.game_name)).toFixed(2);
        var remainder = valo_prices.currency[id] - props.price;
        if (remainder < 0) {
            remainder = 0
        }
        return (
        <tr className="table-row">
            <td>{valo_prices.currency[id]}</td>
            <td>{valo_prices.prices[id]}</td>
            <td>{per_dollar}</td>
            <td>${item_price}</td>
            <td>{remainder}</td>
        </tr>
    )});
    return (
        // <div>
        //     <ul className={styles.priceList}>
        //         <li className={styles.priceTableComponent}>Pack Amount</li>
        //         <li className={styles.priceTableComponent}>Pack Amount</li>
        //     </ul>
        //     <ul>
        //         {listItems}
        //     </ul>
        // </div>
        <table className="pack-table">
            <tr className="header-row">
                <th>Game Currency</th>
                <th>Currency Per Pack</th>
                <th>Currency Per Dollar</th>
                <th>Cost in Dollars</th>
                <th>Leftover</th>
            </tr>
            {listItems}
        </table>
    )
}

export default PriceListings