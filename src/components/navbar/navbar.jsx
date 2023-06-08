import React from "react";
import "./_navbar.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import About from "../about/about";
import Home from "../Home/home";
import FAQ from "../FAQ/FAQ";
import Contact from "../Contact/contact";
import { useState } from "react";
let Navbar = (Url) => {
  let [dataMain, setData] = useState({});
  async function getData(url) {
    return await fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d[0]));
  }
  getData(Url);
  return (
    <nav>
      <div className="container">
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">
                <Button>Back</Button>
              </Link>
            </li>
            <li>
              <Link to="/About">
                <Button>About</Button>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <Button>Contact</Button>
              </Link>
            </li>
            <li>
              <Link to="/FAQ">
                <Button>FAQ</Button>
              </Link>
            </li>
            <li>
              <Link to="/home">
                <Button>Home</Button>
              </Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" />
            <Route path="Home" element={<Home data={dataMain} />} />
            <Route path="Contact" element={<Contact data={dataMain} />} />
            <Route path="/about" element={<About data={dataMain} />} />
            <Route path="FAQ" element={<FAQ data={dataMain} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </nav>
  );
};
export default Navbar;
