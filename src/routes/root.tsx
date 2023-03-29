import React from "react";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <div className="nav">
        <ul>
          <li>
            <a href="/orbit-controls">Orbit Controls</a>
          </li>
          <li>
            <a href="/lerp">Lerp</a>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
