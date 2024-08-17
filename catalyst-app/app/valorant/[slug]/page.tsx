import Price from "../components/price";
import PriceListings from "../components/price_listings";
import { useParams } from 'next/navigation';

export default function Home({params}: {params: {
  slug: string,
};
}) {
  return (
    <main>
      <PriceListings price={parseInt(params.slug)}/>
    </main>
  );
}
