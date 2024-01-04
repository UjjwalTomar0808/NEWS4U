import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/"  className={styles.title}>
            News4U
          </Link>
      <div className={styles.menu}>

        <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          <div className={styles.bar} >
          </div>
          <div className={styles.bar} ></div>
          <div className={styles.bar} ></div>
        </button>



        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
          <Link to="/" >All</Link>
          </li>
          <li>
          <Link to="/business">Business</Link>
          </li>
          <li>
          <Link to="/entertainment">Entertainment</Link>
          </li>
          <li>
          <Link to="/health">Health</Link>
          </li>
          <li>
          <Link to="/science"> Science</Link>
          </li>
          <li>
          <Link to="/sports">Sports
          </Link>
          </li>
          <li>
          <Link to="/technology">Technology
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
