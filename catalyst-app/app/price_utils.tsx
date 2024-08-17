import prisma from '../lib/prisma'

// Functions relating to currency calculations

async function get_prices(game_string: string) {
    const db_prices: any = await prisma.price.findMany({
        where: {game: game_string}
    });
    const prices: any = {currency: [], prices: []}
    for (let i=0;i<db_prices.length;i++) {
        prices.currency.push(db_prices[i].currency);
        prices.prices.push(db_prices[i].price);
    }

    return prices;
}

async function currency_per_dollar(index: number, game_string: string) {
    const game_prices: any = await get_prices(game_string);
    return game_prices.currency[index] / game_prices.prices[index];
}

function get_lowest_required_value(amount: number, game_string: string) {
    // Gets lowest single price pack for an amount
    const prices: any = get_prices(game_string);

    for (let i=0;i<prices.currency.length;i++) {
        if (prices.currency[i] >= amount) {
            return prices.cost[i];
        }
    }
}

async function price_in_money(amount: number, convert_index: number, game_string: string) {
    // Gets item price in AUD for an item cost
    // Get currency per dollar from index
    // Divide cost by currency per dollar.
    var cost_per_dollar: number = await currency_per_dollar(convert_index, game_string);
    return amount / cost_per_dollar;
}

export { 
    get_prices,
    currency_per_dollar,
    get_lowest_required_value,
    price_in_money,
};