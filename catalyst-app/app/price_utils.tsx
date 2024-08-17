// Functions relating to currency calculations
const valo_prices = {
    premium: [525, 1025, 2175, 3975, 5800, 9750],
    cost: [7.99, 14.99, 30.99, 55.99, 79.99, 129.99]
};

function valo_currency_per_dollar(index: number) {
    return valo_prices.premium[index] / valo_prices.cost[index];
}

function get_lowest_required_value(amount: number) {
    // Gets lowest single price pack for an amount
    for (let i=0;i<valo_prices.premium.length;i++) {
        if (valo_prices.premium[i] >= amount) {
            return valo_prices.cost[i];
        }
    }
}

function price_in_money(amount: number, convert_index: number) {
    // Gets item price in AUD for an item cost
    // Get currency per dollar from index
    // Divide cost by currency per dollar.
    var cost_per_dollar = valo_currency_per_dollar(convert_index);
    return amount / cost_per_dollar;
}

export { 
    valo_prices, 
    valo_currency_per_dollar,
    get_lowest_required_value,
    price_in_money,
};