import React from "react";
import "./style.css"
function Nav() {
    return (
    <div className="navBox">
  <nav class="nav">
  <a className="nav-link active">Google Search</a>
  <a className="nav-link active" href="/search"> Search
  </a>
  <a className="nav-link" href="/saved">Saved</a>
  
</nav>

</div>

    );
}

export default Nav;