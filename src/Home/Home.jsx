import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import './home.css'

const Home = () => {
      return (
            <div id="body">
                  <Nav></Nav>
                  <main className=" container mx-auto">
                        <Outlet></Outlet>
                  </main>
            </div>
      );
};

export default Home;