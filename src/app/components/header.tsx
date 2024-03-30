import ThemeSwitcher from "./themeSwitcher";

export default function Header() {
  return (
    <>
      <div className="flex justify-between px-10 pt-3">
        <h1 className="flex justify-center text-4xl ">
          Kristian Elde Johansen - Homepage
        </h1>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-3 text-center rounded-3xl m-5">
          <li className="bg-primary py-3 text-xl hover:underline rounded-l-3xl">
            <a href="./">
              <div>Home</div>
            </a>
          </li>
          <li className="bg-primary py-3 text-xl hover:underline">
            <a href="/cv">
              <div>CV</div>
            </a>
          </li>
          <li className="bg-primary py-3 text-xl hover:underline rounded-r-3xl">
            <a href="/projects">
              <div>Projects</div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
