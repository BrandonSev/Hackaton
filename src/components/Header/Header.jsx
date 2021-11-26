import React from "react";
import './Header.css';

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center mt-2">
      <div ><img className="logo" src="/image/Logo.png" alt="" /></div>
      <div className="d-flex align-items-center">
        <button className="btn btn-primary btn-sm">Login</button>
        <button className="btn btn-primary ml-2 btn-sm">Signup</button>
      </div>
    </div>
  );
}

export default Header;
