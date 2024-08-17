import React from 'react';
import { get_lowest_cost } from '@/app/price_utils';

const LowestCost = async (props: {price: number, gameName: string}) => {
    const lowest_costs = await get_lowest_cost(props.price, props.gameName);
    console.log(lowest_costs);
    const cost_sum = lowest_costs.price_sum.reduce((a: number, b: number) => a+b, 0)
    const costs_list = Array.from(Array(lowest_costs.currency_sum.length).keys()).map((index) => (
        <li>
            <p>{lowest_costs.currency_sum[index]}</p>
            <p>{lowest_costs.price_sum[index]}</p>
        </li>
    ));
    return (
        <div>
            <h1>Lowest Cost Calculation</h1>
            <ul>
                {costs_list}
            </ul>
            <p>Total: {cost_sum}</p>
        </div>
    )
}

export default LowestCost