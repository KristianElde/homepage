"use client";
import LangSwitcher from "./langSwitcher";
import ThemeSwitcher from "./themeSwitcher";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const selected = usePathname();

  return (
    <>
      <div className="flex justify-between items-center pt-3">
        <h1 className="hidden md:block text-4xl pb-4">
          Kristian Elde Johansen
        </h1>
        <h1 className="block md:hidden text-4xl pb-4">Kristian</h1>
        <div></div>
        <div>
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-3 text-center rounded-xl bg-primary">
          <li
            className={`py-3 text-xl rounded-xl ${
              selected === "/" ? "bg-primary-shade" : "bg-primary"
            }`}
          >
            <a href="./">
              <div className="text-white font-semibold hover:font-extrabold">
                Home
              </div>
            </a>
          </li>
          <li
            className={`py-3 text-xl rounded-xl ${
              selected === "/cv" ? "bg-primary-shade" : "bg-primary"
            }`}
          >
            <a href="/cv">
              <div className="text-white font-semibold hover:font-extrabold">
                CV
              </div>
            </a>
          </li>
          <li
            className={`py-3 text-xl rounded-xl ${
              selected === "/projects" ? "bg-primary-shade" : "bg-primary"
            }`}
          >
            <a href="/projects">
              <div className="text-white font-semibold hover:font-extrabold">
                Projects
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
