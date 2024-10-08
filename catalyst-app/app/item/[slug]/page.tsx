import React from "react";
import LowestCost from "../../components/lowest_cost";
import PriceListings from "@/app/components/price_listings";
import { get_item } from "@/app/item_utils";
import Link from "next/link";

export default async function ItemPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  if (!parseInt(params.slug)) {
    return <></>;
  }
  const item = await get_item(parseInt(params.slug));
  return (<></>
//   return (
//     <div className="individual-product-container">
//       <div className="product-row-1">
//         <div className="product-row-1-col-1">
//           <div className="product-img">
//             <img src={item.picture} />
//           </div>
//         </div>
//         <div className="product-row-1-col-2">
//           <div className="product-row-1-col-2-row-1">
//             <div className="product-header">{item.item_name}</div>
//           </div>
//           <div className="product-row-1-col-2-row-2">
//             <div className="product-price-label">Price: </div>
//           </div>
//           <div className="product-row-1-col-2-row-3">
//             {/* Get Currency Points from DB later */}
//             <div className="product-price">
//               <img src="" />
//               {item.price}
//               <br />
//               Points
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="product-row-2">
//         <PriceListings price={item.price} game_name={item.game} />
//       </div>

//       <div className="product-row-3">
//         <div className="product-row-3-header">Optimal Pack Permutation</div>
//         <div className="pack-row">
//           <div className="pack-list pack-col-1">
//             <div className="pack">
//               <div className="pack-currency">
//                 <img src="images/images.jpeg" />
//                 525
//               </div>
//               <div className="pack-cost">$7.99</div>
//             </div>
//             <div className="pack">
//               <div className="pack-currency">
//                 <img src="images/images.jpeg" />
//                 525
//               </div>
//               <div className="pack-cost">$14.99</div>
//             </div>
//             1025
//           </div>
//           <div className="pack-col-2">
//             <div className="product-total">Total: $21.99</div>
//             <Link href="/">
//               <div className="add-to-cart-btn">Add to Basket</div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
  );
}
