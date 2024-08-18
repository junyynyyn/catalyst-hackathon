import { get_prices } from '../price_utils';
import { get_items } from '../item_utils';
import GameItem from '../components/game_item';

export default async function LeagueHome() {
  const items = await get_items("league");
  const items_list = items.map((item: any) => (
    <GameItem item={item}/>
));
  return (
    <div>
      <div className="game-list-header">
          <h2 className="game-title">League of Legends</h2>
      </div>

      <div className="game-list">
          {items_list}
      </div>
  </div>
  );
}