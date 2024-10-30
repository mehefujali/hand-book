import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
      const [navs, setNavs] = useState([])
      useEffect(() => {
            fetch('nav.json')
                  .then(res => res.json())
                  .then(data => setNavs(data))
      }, [])

      return (
            <nav>
                  <div className=" flex justify-between container mx-auto">
                        <h1>Hand book</h1>
                        <div>
                              <ul className=" flex gap-6 items-center ">
                                    {navs.map((nav, idx) => <NavLink to={nav.route} key={idx}><li >{nav.name}</li></NavLink>)}
                              </ul>
                        </div>
                  </div>
            </nav>
      );
};

export default Nav;