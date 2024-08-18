import { useParams } from 'next/navigation';
import { get_items } from '../item_utils';

export default async function ValorantHome() {
    const items = await get_items("valorant");
    const items_list = items.map((item: any) => (
        // <div>
        //     <h2>{item.item_name}</h2>
        //     <img src={item.picture} alt={item.item_name} />
        // </div>
        <div className="game-item">
            <img src={item.picture}/>
            <div className="game-item-content">
                <p>
                    <div className="game-item-name">{item.item_name}</div>
                    <div className="game-item-price">{item.price}</div>
                    <div className="game-item-desc">{item.info}</div>
                </p>
            </div>
        </div>
    ));
    return (
        <div>
            <div className="game-list-header">
                <h2 className="game-title">Valorant</h2>
            </div>
    
            <div className="game-list">
                {items_list}
            </div>
        </div>
    );
}
