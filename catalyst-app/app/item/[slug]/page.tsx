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
        // <main>
        // <h1>Item: {item.item_name}</h1>
        // <h2>Item Price: {item.price} </h2>
        // <PriceListings price={parseInt(item.price)} game_name={item.game}/>
        // {/* <LowestCost price={parseInt(item.price)} gameName=''/> */}
        // </main>
    const item = await get_item(parseInt(params.slug));
    return (
        <div className="individual-product-container">
            <div className="product-row-1">
                <div className="product-row-1-col-1">
                    <div className="product-img">
                        <img src={item.picture}/>
                    </div>
                </div>
                <div className="product-row-1-col-2">
                    <div className="product-row-1-col-2-row-1">
                        <div className="product-header">{item.item_name}</div>
                    </div>
                    <div className="product-row-1-col-2-row-2">
                        <div className="product-price-label">Price: </div>
                    </div>
                    <div className="product-row-1-col-2-row-3">
                        {/* Get Currency Points from DB later */}
                        <div className="product-price"><img src=""/>{item.price}<br />Points</div>
                    </div>
                </div>
            </div>
            <div className="product-row-2">
                <PriceListings price={item.price} game_name={item.game}/>
            </div>

            <div className="product-row-3">
                <div className="product-row-3-header">Optimal Pack Permutation</div>
                <div className="pack-list">
                    <div className="pack"><img src="images/images.jpeg"/>525</div>
                    <div className="pack">1000</div>
                    <div className="pack">500</div>
                    <div className="pack">1000</div>
                </div>
            </div>
        </div>
    );
}
