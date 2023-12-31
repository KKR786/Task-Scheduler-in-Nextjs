"use client";

import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.png";

export default function Navbar() {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname, active);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  useEffect(() => {
    setOpen(false);
    setActive(pathname);
  }, [pathname]);

  const handleActive = (link) => {
    setActive(link);
  };

  const hamburger = () => {
    setOpen(true);
  };

  return (
    <div>
      {session?.user ? (
        <>
          <div className="lg:fixed hidden lg:flex flex-col w-[18rem] z-50 inset-y-0">
            <div className="pb-[1rem] px-[1.5rem] overflow-y-auto sidebar flex flex-col grow gap-y-[1.25rem]">
              <div className="py-2">
                <Image
                  className="mx-auto"
                  src={logo}
                  alt="logo"
                  width={90}
                  height={90}
                />
              </div>
              <nav className="flex flex-col flex-1">
                <ul
                  role="list"
                  className="flex flex-col flex-1 gap-y-[1.75rem]"
                >
                  <li>
                    <ul role="list" className="mx-[-0.5rem]">
                      <li onClick={() => handleActive("/")}>
                        <Link
                          href="/"
                          className={`${
                            active === "/" ? "text-white" : "text-gray-400"
                          } p-[0.5rem] rounded-md font-semibold leading-6 flex gap-x-[0.75rem] text-sm`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="shrink-0 w-[1.5rem] h-[1.5rem]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            ></path>
                          </svg>
                          Dashboard{" "}
                        </Link>
                      </li>
                      <li onClick={() => handleActive("/tasks")}>
                        <Link
                          href="/tasks"
                          className={`${
                            active === "/tasks" ? "text-white" : "text-gray-400"
                          } p-[0.5rem] rounded-md font-semibold leading-6 flex gap-x-[0.75rem] text-sm`}
                        >
                          <span className="material-symbols-outlined">
                            task
                          </span>
                          Tasks{" "}
                        </Link>
                      </li>
                      <li onClick={() => handleActive("/projects")}>
                        <Link
                          href="/projects"
                          className={`${
                            active === "/projects"
                              ? "text-white"
                              : "text-gray-400"
                          } p-[0.5rem] rounded-md font-semibold leading-6 flex gap-x-[0.75rem] text-sm`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="shrink-0 w-[1.5rem] h-[1.5rem]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                            ></path>
                          </svg>
                          Projects{" "}
                        </Link>
                      </li>
                      <li onClick={() => handleActive("/calendar")}>
                        <Link
                          href="/calendar"
                          className={`${
                            active === "/calendar"
                              ? "text-white"
                              : "text-gray-400"
                          } p-[0.5rem] rounded-md font-semibold leading-6 flex gap-x-[0.75rem] text-sm`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="shrink-0 w-[1.5rem] h-[1.5rem]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                            ></path>
                          </svg>
                          Calendar{" "}
                        </Link>
                      </li>
                      <li onClick={() => handleActive("/reports")}>
                        <Link
                          href="/reports"
                          className={`${
                            active === "/reports"
                              ? "text-white"
                              : "text-gray-400"
                          } p-[0.5rem] rounded-md font-semibold leading-6 flex gap-x-[0.75rem] text-sm`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="shrink-0 w-[1.5rem] h-[1.5rem]"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                            ></path>
                          </svg>
                          Reports{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="lg:pl-[18rem]">
            <div className="bg-white shadow-md flex items-center z-40 h-[4rem] top-0 sticky gap-x-[1rem] sm:gap-x-[1.5rem] px-[1rem] lg:px-[2rem] sm:px-[1.5rem]">
              <button
                type="button"
                className="m-[-0.625rem] p-[0.625rem] lg:hidden"
                onClick={hamburger}
              >
                <span className="t">Open sidebar</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-[1.5rem] h-[1.5rem]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </button>

              {open && (
                <div className="z-50 relative delay-300 ease-in duration-500">
                  <div className="fixed inset-0 opacity-100 bg-gray-900/80"></div>
                  <div className="fixed inset-0 flex">
                    <div className="flex-1 w-full max-w-[19rem] flex relative mr-[4rem]">
                      <div className="flex pt-5 justify-center w-[4rem] top-0 left-full absolute">
                        <button
                          type="button"
                          className="p-[0.625rem] m-[-0.6254rem]"
                          onClick={() => setOpen(false)}
                        >
                          <span className="t">Close sidebar</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="w-[1.5rem] h-[1.5rem] text-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div className="bg-gray-900 flex pb-[1rem] px-[1.5rem] flex-col overflow-y-auto gap-y-[1.25rem] grow">
                        <div className="py-2">
                          <Image src={logo} alt="logo" width={60} height={60} />
                        </div>
                        <nav className="mt-8 flex flex-col flex-1">
                          <ul
                            role="list"
                            className="flex flex-col flex-1 gap-y-[1.75rem]"
                          >
                            <li>
                              <ul role="list" className="mx-[-0.5rem]">
                                <li onClick={() => handleActive("/")}>
                                  <Link
                                    href="/"
                                    className={`${
                                      active === "/"
                                        ? "text-white bg-indigo-700"
                                        : "text-gray-400"
                                    } p-[0.5rem] rounded-md font-semibold leading-6 flex gap-x-[0.75rem] text-sm`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                      className="shrink-0 w-[1.5rem] h-[1.5rem]"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                      ></path>
                                    </svg>
                                    Dashboard{" "}
                                  </Link>
                                </li>
                                <li onClick={() => handleActive("/tasks")}>
                                  <Link
                                    href="/tasks"
                                    className={`${
                                      active === "/tasks"
                                        ? "text-white bg-indigo-700"
                                        : "text-gray-400"
                                    } p-[0.5rem] rounded-md font-semibold leading-6 flex gap-x-[0.75rem] text-sm`}
                                  >
                                    <span className="material-symbols-outlined">
                                      task
                                    </span>
                                    Tasks{" "}
                                  </Link>
                                </li>
                                <li onClick={() => handleActive("/projects")}>
                                  <Link
                                    href="/projects"
                                    className={`${
                                      active === "/projects"
                                        ? "text-white bg-indigo-700"
                                        : "text-gray-400"
                                    } p-[0.5rem] rounded-md font-semibold leading-6 flex gap-x-[0.75rem] text-sm`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                      className="shrink-0 w-[1.5rem] h-[1.5rem]"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                                      ></path>
                                    </svg>
                                    Projects{" "}
                                  </Link>
                                </li>
                                <li onClick={() => handleActive("/calendar")}>
                                  <Link
                                    href="/calendar"
                                    className={`${
                                      active === "/calendar"
                                        ? "text-white bg-indigo-700"
                                        : "text-gray-400"
                                    } p-[0.5rem] rounded-md font-semibold leading-6 flex gap-x-[0.75rem] text-sm`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                      className="shrink-0 w-[1.5rem] h-[1.5rem]"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                      ></path>
                                    </svg>
                                    Calendar{" "}
                                  </Link>
                                </li>
                                <li onClick={() => handleActive("/reports")}>
                                  <Link
                                    href="/reports"
                                    className={`${
                                      active === "/reports"
                                        ? "text-white bg-indigo-700"
                                        : "text-gray-400"
                                    } p-[0.5rem] rounded-md font-semibold leading-6 flex gap-x-[0.75rem] text-sm`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                      className="shrink-0 w-[1.5rem] h-[1.5rem]"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                                      ></path>
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                                      ></path>
                                    </svg>
                                    Reports{" "}
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-1 gap-x-[1rem] lg:gap-x-[1.5rem]">
                <form className="relative flex flex-1" action="#" method="GET">
                  <label for="search-field" className="t">
                    Search
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="absolute w-[1.25rem] h-full left-0 inset-y-0"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <input
                    id="search-field"
                    className="w-full h-full border-0 pr-0 pl-[2rem] py-0"
                    placeholder="Search..."
                    type="search"
                    name="search"
                  />
                </form>
                <div className="flex items-center gap-x-[1rem] lg:gap-x-[1.5rem]">
                  <button type="button" className="m-[-0.625rem] p-[0.625rem]">
                    <span className="t">View notifications</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-[1.5rem] h-[1.5rem]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      ></path>
                    </svg>
                  </button>
                  <div
                    className="hidden lg:block lg:h-[1.5rem] lg:w-[1px] bg-gray-900"
                    aria-hidden="true"
                  ></div>
                  <div className="relative" data-headlessui-state="">
                    <button
                      className="m-[-0.375rem] flex items-center p-[0.375rem]"
                      id="headlessui-menu-button-1"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <span className="t">Open user menu</span>
                      <Image
                        className="h-[2rem] w-[2rem] rounded-[10px]"
                        src=""
                        alt="User Image"
                      />
                      <span className="hidden lg:flex lg:items-center">
                        <span
                          className="ml-[1rem] text-sm font-semibold leading-6"
                          aria-hidden="true"
                        >
                          User Name
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-[0.5rem] h-[1.25rem] w-[1.25rem]"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className="black_btn"
              >
                Sign in
              </button>
            ))}
        </>
      )}
    </div>
  );
}
