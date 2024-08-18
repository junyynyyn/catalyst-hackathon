import { get_lowest_cost, get_prices, price_in_money } from "../price_utils";
import { get_item, get_items } from "../item_utils";
import GameItem from "../components/game_item";
import CartItem from "./components/cart_item";

const items = [99,129,2657]

export default async function ShoppingCart() {
    const itemList = items.map(async (item_id) => {
        const item_info = await get_item(item_id);
        return (<CartItem item={item_info}/>);
    });

    var total = 0;
    for (let i=0;i<items.length;i++) {
        const item_info = await get_item(items[i]);
        console.log(item_info);
        const value = await price_in_money(item_info.price, 5, item_info.game);
        total += value;
    }
  return (
    <div>
        <div className="cart-header">
            <h2 className="cart-title">Cart</h2>
            <div className="cart-quantity">{items.length}</div>
        </div>

        <div className="cart-container">
            <div className="cart-list cart-col">
                {itemList}
            </div>

            <div className="cart-summary cart-col">
                <div className="cart-summary-header">
                    Order Summary
                </div>
                <div className="cart-summary-details">
                    {/* <div className="cart-summary-subtotal">
                        <div className="cart-summary-subtotal-label">Subtotal</div>
                        <div className="cart-summary-subtotal-value">$27.44</div>
                    </div>
                    <div className="cart-summary-leftover">
                        <div className="cart-summary-leftover-label">Leftover</div>
                        <div className="cart-summary-leftover-value">$3.99</div>
                    </div> */}
                </div>
                <div className="cart-summary-total">
                    <div className="cart-summary-total-label">Total</div>
                        <div className="cart-summary-total-value">${total.toFixed(2)}</div>
                </div>
            </div>
        </div>
    </div>
  );
}
