import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="app-shell">
      <div className="page-grid" aria-hidden="true" />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
