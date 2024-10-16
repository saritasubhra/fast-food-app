import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
