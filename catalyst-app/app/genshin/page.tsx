import { get_prices } from '../price_utils';
import { get_items } from '../item_utils';

export default async function GenshinHome() {
  const items = await get_items("genshin");
  const items_list = items.map((item: any) => (
    <div className="game-item">
      <img src={item.picture}/>
      <div className="game-item-content">
            <div className="game-item-name">{item.item_name}</div>
            <div className="game-item-price">{item.price / 160} Rolls</div>
            <div className="game-item-desc">{item.info}</div>
      </div>
  </div>
  ));
  return (
    <div>
      <div className="game-list-header">
          <h2 className="game-title">Genshin Impact</h2>
      </div>

      <div className="game-list">
          {items_list}
      </div>
  </div>
  );
}