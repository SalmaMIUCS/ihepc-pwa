import { Outlet, NavLink } from "react-router-dom";

export default function Shell() {
  return (
    <>
      <div style={{ padding: 16, paddingBottom: 90 }}>
        <Outlet />
      </div>

      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 12,
          borderTop: "1px solid #ddd",
          background: "#fff",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <NavLink to="/feed">Feed</NavLink>
        <NavLink to="/committees">Committees</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </>
  );
}
