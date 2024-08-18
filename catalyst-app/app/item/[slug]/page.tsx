import React from 'react'
import LowestCost from '../../components/lowest_cost';
import PriceListings from '@/app/components/price_listings';
import { get_item } from '@/app/item_utils';
import { useParams } from 'next/navigation';

export default async function ItemPage({params}: {params: {
  slug: string,
};
}) {
    if (!parseInt(params.slug)) {
        return (
            <>
            </>
        )
    }
    const item = await get_item(parseInt(params.slug));
    return (
        <main>
        <h1>Item: {item.item_name}</h1>
        <h2>Item Price: {item.price} </h2>
        <PriceListings price={parseInt(item.price)}/>
        {/* <LowestCost price={parseInt(item.price)} gameName=''/> */}
        </main>
    );
}
