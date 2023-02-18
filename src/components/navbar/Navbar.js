import React from "react";

function Navbar() {
  const handleProfile = () => {
    // navigate("/home/profile")
  };
  const handleLogout = () => {
    // navigate("/")
  };
  const handleHome = () => {
    // navigate("/home")
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Political Party</a>
      
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Home </a>
          <a class="nav-item nav-link" href="#">Events</a>
          <a class="nav-item nav-link" href="#">Merchandise</a>
          <a class="nav-item nav-link" href="#">Agenda</a>
          <a class="nav-item nav-link" href="#">Contact Us</a>
        </div>
    </nav>
  );
}

export default Navbar;
