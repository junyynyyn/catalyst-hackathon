import prisma from '../lib/prisma'
// Functions relating to currency calculations

async function get_prices(game_string: string) {
    const db_prices: any = await prisma.price.findMany({
        where: {game: game_string},
        orderBy: {
            id: 'asc'
        }
    });
    const prices: any = {currency: [], prices: []}
    for (let i=0;i<db_prices.length;i++) {
        prices.currency.push(db_prices[i].points);
        prices.prices.push(db_prices[i].price);
    }

    return prices;
}

async function currency_per_dollar(index: number, game_string: string) {
    const game_prices: any = await get_prices(game_string);
    return game_prices.currency[index] / game_prices.prices[index];
}

async function get_lowest_required_value(amount: number, game_string: string) {
    // Gets lowest single price pack for an amount
    const prices: any = await get_prices(game_string);
    for (let i=0;i<prices.currency.length;i++) {
        if (prices.currency[i] >= amount) {
            return prices.prices[i];
        }
    }
    return prices.prices[prices.currency.length - 1];
}

async function price_in_money(amount: number, convert_index: number, game_string: string) {
    // Gets item price in AUD for an item cost
    // Get currency per dollar from index
    // Divide cost by currency per dollar.
    var cost_per_dollar: number = await currency_per_dollar(convert_index, game_string);
    return amount / cost_per_dollar;
}

async function get_lowest_cost(amount: number, game_string: string) {
    const prices_arrays: any = await get_prices(game_string);
    const currency: any = prices_arrays.currency;
    var currency_sum: number[] = [];
    var price_sum: number[] = [];
    while (currency_sum.reduce((a: number,b: number) => a+b, 0) <= amount) {
        // Loop while still below the total sum of currency
        // Loop through every currency value
        // If currency value > required amount return value.
        for (let i=0;i<currency.length;i++) {
            if (currency[i] >= amount - currency_sum.reduce((a: number, b: number) => a+b, 0) || i == currency.length - 1) {
                currency_sum.push(currency[i]);
                price_sum.push(prices_arrays.prices[i]);
                break;
            }
            // If combined cost is < than the bigger value, add the 2 lower ones
        }
    }
    return {currency_sum, price_sum};
}

export { 
    get_prices,
    currency_per_dollar,
    get_lowest_required_value,
    price_in_money,
    get_lowest_cost,
};