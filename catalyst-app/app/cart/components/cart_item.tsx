import { get_lowest_cost, get_lowest_required_value, get_prices, price_in_money } from '@/app/price_utils'
import React from 'react'

const CartItem = async (props: {item: any}) => {
    const currency = await get_prices(props.item.game);
    const lowest_price = await get_lowest_required_value(props.item.price, props.item.game);
    const lowest_index = currency.prices.indexOf(lowest_price);
    const item_irl_price = (await price_in_money(props.item.price, 5, props.item.game)).toFixed(2);
  return (
    <div className="cart-item">
        <div className="cart-item-img">
            <img src={props.item.picture}/>
        </div>
        <div className="cart-item-desc">
            <div className="cart-item-desc-row">
                <div className="cart-item-desc-col-1">
                    {props.item.item_name} - {props.item.game}
                </div>
                <div className="cart-item-desc-col-2-price">
                    {props.item.price}
                </div>
            </div>

            <div className="cart-item-desc-row">
                <div className="cart-item-desc-col-1-price">
                    ${lowest_price}
                </div>
                <div className="cart-item-desc-col-2">
                    ${item_irl_price}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem