import React, { useEffect } from "react";
import { PreventComponent } from "../components";
import { Outlet, useNavigate } from "react-router-dom";
import { getProfile } from "../service/Auth.service";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("auth");
    nav("/");
  };
  useEffect(() => {
    (async () => {
      const res = await getProfile();
      console.log(res);
    })();
  }, []);
  const handleAdd = () => nav("/home/add");
  return (
    <PreventComponent fail={"/"} check={!localStorage.getItem("auth")}>
      <div>
        {/* <div className="mb-5">
          <button
            onClick={handleAdd}
            className="text-sm bg-cyan-500 text-white py-1 px-2 mt-10 rounded-lg "
          >
            Add
          </button>
          <button
            onClick={handleLogOut}
            className="text-sm bg-cyan-500 text-white py-1 px-2 mt-10 rounded-lg "
          >
            Log Out
          </button>
        </div> */}

        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mb-2 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <h1 className="text-2xl font-bold">Redux Learning</h1>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                onClick={handleAdd}
                className="text-white bg-cyan-300 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 hover:scale-90 duration-300 me-3"
              >
                Create Content
              </button>
              <button
                onClick={handleLogOut}
                className="text-white bg-cyan-300 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700  hover:scale-90 duration-300"
              >
                Log out
              </button>
            </div>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Outlet />
      </div>
    </PreventComponent>
  );
};

export default HomePage;
