import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      {/* Removed the <Link> wrapper so Logo, Search, and Button 
        all share the exact same immediate parent (<nav>) 
      */}
      <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <Logo />
      </div>
      
      <Search
        placeholder="Search a album of your choice" // Updated to match typical buildout expectations
        searchData={searchData}
      />
      
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;