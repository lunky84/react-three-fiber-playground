import React from "react";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <div className="nav">
        <ul>
          <li>
            <a href="/">Orbit Controls</a>
          </li>
          <li>
            <a href="/lerp">Lerp</a>
          </li>
          <li>
            <a href="/scroll-controls">Scroll Controls</a>
          </li>
          <li>
            <a href="/scroll-trigger">Scroll Trigger</a>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
