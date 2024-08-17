import Image from "next/image";
import prisma from '../lib/prisma';
import { get_prices } from './price_utils';

export default async function Home() {
  // const league_prices = await get_prices('valorant');
  // console.log(league_prices.currency);
  return (
    <main>
      <h1>Wish Ender</h1>
    </main>
  );
}