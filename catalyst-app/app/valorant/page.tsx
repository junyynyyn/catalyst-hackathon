import { useParams } from 'next/navigation';
import { get_items } from '../item_utils';

export default async function ValorantHome() {
    const items = await get_items("valorant");
    console.log(items);
    const items_list = items.map((item: any) => (
        <div>
            <h2>{item.item_name}</h2>
            <img src={item.picture} alt={item.item_name} />
        </div>
    ));
    return (
        <main>
            <h1>Valorant Items</h1>
            {items_list}
        </main>
    );
}
