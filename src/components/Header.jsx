import React, { useState } from "react";
import LinkTag from "./LinkTag";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuOverlay from "./MenuOverlay";
import { useSelector } from "react-redux";

const navLinks = [
  { title: "Anasayfa", to: "/" },
  {
    title: "Sepet",
    to: "/basket",
  },
];

const Header = () => {
  const state = useSelector((store) => store.basketReducer);
  // toplam miktarı hesaplar
  const total = state.basket.reduce((total, i) => total + i.amount, 0);
  const [navbarOpen, setNavbarOpen] = useState(true);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100] p-4">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link className="text-4xl" to="/">
          E-Ticaret
        </Link>
        <div className="hidden md:block">
          <div className="flex items-center gap-3">
            <LinkTag to="/" title={"Anasayfa"} />
            <LinkTag to={"/basket"} title={"Sepet"} />
            <span>{total}</span>
          </div>
        </div>
        <div className="block md:hidden">
          {navbarOpen ? (
            <button onClick={() => setNavbarOpen(false)}>
              <GiHamburgerMenu size={23} />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(true)}>
              <AiOutlineClose size={23} />
            </button>
          )}
        </div>
      </div>
      {!navbarOpen ? <MenuOverlay navLinks={navLinks} /> : null}
    </nav>
  );
};

export default Header;
