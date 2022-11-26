import React from "react";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <h1>Logo</h1>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
