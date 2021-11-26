import React from "react";

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center mt-2">
      <div className="font-weight-bold">Let's the Music Play</div>
      <div className="d-flex align-items-center">
        <button className="btn btn-primary btn-sm">Login</button>
        <button className="btn btn-primary ml-2 btn-sm">Signup</button>
      </div>
    </div>
  );
}

export default Header;
