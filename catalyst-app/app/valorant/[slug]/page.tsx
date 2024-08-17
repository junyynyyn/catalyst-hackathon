import LowestCost from "../components/lowest_cost";
import Price from "../components/price";
import PriceListings from "../components/price_listings";
import { useParams } from 'next/navigation';

export default function Home({params}: {params: {
  slug: string,
};
}) {
  return (
    <main>
      <h1>Item Price: {params.slug} </h1>
      <PriceListings price={parseInt(params.slug)}/>
      <LowestCost price={parseInt(params.slug)} gameName='valorant'/>
    </main>
  );
}
