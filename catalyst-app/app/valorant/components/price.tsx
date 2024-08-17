import React from 'react'
import {valo_currency_per_dollar, get_lowest_required_value, price_in_money} from '../../price_utils';

const Price = () => {
    var num = valo_currency_per_dollar(0);
    var lowest_value = get_lowest_required_value(8000);
    var price = price_in_money(5950, 0);
    return (
        <div>
            <h1>{num}</h1>
            <h2>${lowest_value}</h2>
            <p>{price}</p>
        </div>
    )
}

export default Price