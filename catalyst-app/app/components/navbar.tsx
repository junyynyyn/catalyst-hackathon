"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    const element = document.getElementById("pullout-menu")
    if (element) {
     element.style.animation = "menu-slide-in 1.5s ease forwards"
    }

  };

  function closeMenu() {
    const element = document.getElementById("pullout-menu")
    if (element) {
     element.style.animation = ""
    }
  };

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
          <div className="menu-list">
            <Link href="/league">
              <div
                className="menu-item" onClick={closeMenu}>League of Legends</div>
            </Link>
            <Link href="/valorant">
              <div className="menu-item" onClick={closeMenu}>Valorant</div>
            </Link>
            <Link href="/genshin">
              <div className="menu-item" onClick={closeMenu}>Genshin Impact</div>
            </Link>
            <Link href="/">
              <div className="menu-item">Honkai Star Rail (coming soon)</div>
            </Link>
            <Link href="/">
              <div className="menu-item">Arknights (coming soon)</div>
            </Link>
          </div>
        </div>
      </div>
      <header>
        <Link href="/">
          <h1 id="title">Verence</h1>
        </Link>

        <nav>
          <ul className="nav-bar">
            <li>
              <div className="menu-section">
                <img
                  className="menu-icon"
                  src="icons/bars-solid.svg"
                  onClick={openMenu}
                />
              </div>
              <div className="menu-section">
                <div className="games">games</div>
                <div>Menu</div>
              </div>
            </li>
            <li>
              {/* <Link href="/valorant" className="nav-btn">
                My Profile
              </Link> */}
              <Link href="/cart">
              <div className="nav-btn cart-btn">Basket (3)</div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
