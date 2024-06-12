import { Outlet } from "react-router-dom";
import MainHeader from "../../shared/mainHeader/MainHeader";
import MainFooter from "../../shared/mainFooter/MainFooter";

export default function FrontendLayout() {
  return (
    <>
      <header>
        <MainHeader />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <MainFooter />
      </footer>
    </>
  );
}
