import { useParams } from 'next/navigation';
import { get_items } from '../item_utils';
import GameItem from '../components/game_item';

export default async function ValorantHome() {
    const items = await get_items("valorant");
    const items_list = items.map((item: any) => (
        <GameItem item={item}/>
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
