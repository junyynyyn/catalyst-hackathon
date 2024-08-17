import { get_prices } from '../price_utils';
import { get_items } from '../item_utils';

export default async function LeagueHome() {
  const items = await get_items("league");
  const items_list = items.map((item: any) => (
    <div className="game-item">
      <img src={item.picture}/>
      <div className="game-item-content">
          <p>
              <div className="game-item-name">{item.item_name}</div>
              <div className="game-item-price">{item.price}</div>
              <div className="game-item-desc">Boiler Text</div>
          </p>
      </div>
  </div>
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