import React from 'react'
import Link from 'next/link'

const GameItem = (item: any) => {
    return (
      <div className="game-item">
        <img src={item.item.picture}/>
        <Link href={"/item/" + item.item.id}>
        <div className="game-item-content">
            <div className="game-item-name">{item.item.item_name}</div>
            <div className="game-item-price">{item.item.price}</div>
            <div className="game-item-desc">{item.item.info}</div>
        </div>
        </Link>
      </div>
  )
}

export default GameItem