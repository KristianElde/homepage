"use client";
import LangSwitcher from "./langSwitcher";
import ThemeSwitcher from "./themeSwitcher";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const selected = usePathname();
  const routes = ["", "CV", "Projects"];
  return (
    <>
      <div className="flex justify-between items-center pt-3">
        <h1 className="hidden md:block text-4xl pb-4 font-semibold">
          Kristian Elde Johansen
        </h1>
        <h1 className="block md:hidden text-4xl pb-4">Kristian</h1>
        <div></div>
        <div className="flex flex-cols space-x-7">
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </div>
      <div>
        <ul
          className={`grid grid-cols-3 text-center rounded-xl bg-primary shadow-2xl border`}
        >
          {routes.map((header, i) => {
            return (
              <li
                key={i}
                className={`group py-3 text-xl rounded-xl transition duration-300 hover:scale-105 hover:shadow-lg ${
                  selected === `/${header.toLowerCase()}`
                    ? "bg-primary-shade"
                    : "bg-primary"
                }`}
              >
                <a href={`/${header.toLowerCase()}`}>
                  <div className="text-white font-semibold transition-all duration-300 group-hover:font-extrabold">
                    {header === "" ? "Home" : header}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
