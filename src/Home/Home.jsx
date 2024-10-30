import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";


const Home = () => {
      return (
            <div>
                  <Nav></Nav>
                  <main className=" container mx-auto">
                        <Outlet></Outlet>
                  </main>
            </div>
      );
};

export default Home;