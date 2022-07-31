import { Outlet } from "react-router-dom";
import Nav from "./navbar/Nav";
import './styles/Layout.scss';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Layout;