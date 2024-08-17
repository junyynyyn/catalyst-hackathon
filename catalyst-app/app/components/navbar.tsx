"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div id="pullout-menu">
        <div id="pullout-menu-header">
          <div className="menu-section">
            <img className="menu-icon" src="icons/star.png" />
          </div>
          <div className="menu-section">
            <div className="games">games</div>
            <div>Menu</div>
          </div>
        </div>
        <div id="pullout-menu-content">
          <img id="selector" src="icons/star.png" />
          <ul className="menu-list">
            <li className="menu-item">League of Legend</li>
            <li className="menu-item">Valorant</li>
            <li className="menu-item">Genshin Impact</li>
            <li className="menu-item">Honkai: Star Rails (coming soon)</li>
            <li className="menu-item">Arknights (coming soon)</li>
          </ul>
        </div>
      </div>
      <header>
        <h1 id="title">Verence</h1>
        <nav>
          <ul className="nav-bar">
            <li>
              <div className="menu-section">
                <img className="menu-icon" src="icons/bars-solid.svg" />
              </div>
              <div className="menu-section">
                <div className="games">games</div>
                <div>Menu</div>
              </div>
            </li>
            <li>
              <Link href="/league/page.tsx" className="nav-btn">
                My Profile
              </Link>
              <a href="" className="nav-btn cart-btn">
                Basket (0)
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
