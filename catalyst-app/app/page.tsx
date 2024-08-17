import Image from "next/image";
import prisma from '../lib/prisma';
import { get_prices } from './price_utils';


export default async function Home() {
  // const league_prices = await get_prices('valorant');
  // console.log(league_prices.currency);
  return (
    <div>
      <div>
          <h2 className="hero-text">The <i>REAL</i> <br/> pay-to-win</h2>
          <img className="hero" src="images/the_cube.png"/>
      </div>

      <div className="content">
          <img className="image-1" src="images/julien-georgel-as-rise06.jpg"/>
          <img className="image-2" src="images/julien-georgel-as-rise07.jpg"/>
      </div>

      <div className="container">
          <p className="first-slide">
            <span>PASSION️‍️‍🔥, CREATIVITY🎨, NOBLE🛡️, WISE💡, FINANCE💵&nbsp;</span>
          </p>
          <p className="words words--first">
            <span>PASSION️‍️‍🔥, CREATIVITY🎨, NOBLE🛡️, WISE💡, FINANCE💵&nbsp;</span>
          </p>
          <p className="words words--second">
            <span>PASSION️‍️‍🔥, CREATIVITY🎨, NOBLE🛡️, WISE💡, FINANCE💵&nbsp;</span>
          </p>
      </div>
      
      <div className="about-container">
          <div className="about-div">
              <div className="about-header"><u>ABOUT US</u></div>
              <div className="about-verence">Verence</div>
          </div>
          <div className="about-div about-content">
              <div className="about-div-header">We believe in right choice. Wise spendings. Products like: Character skins, weapon skins, and games the like.</div>
              <br />
              <div className="about-div-header">What are we left with?</div>
              <div>Extra spending on objects that encourage additional spending or stop there, this helps both the game company and the customer on spending for the right thing and the right time.</div>  
          </div>
      </div>
  </div>
  );
}