import ThemeSwitcher from "./themeSwitcher";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center px-10 pt-3">
        <h1 className="flex justify-center text-4xl font-sans">
          Kristian Elde Johansen - Homepage
        </h1>
        <div className="">
          <ThemeSwitcher />
        </div>
      </div>
      <div className="w-full min-h-0.5 bg-slate-400 mt-2"></div>
      <div>
        <ul className="grid grid-cols-3 text-center rounded-3xl m-5 bg-primary">
          <li className="bg-primary py-3 text-xl hover:underline hover:bg-primary-shade hover:rounded-3xl rounded-l-3xl">
            <a href="./">
              <div>Home</div>
            </a>
          </li>
          <li className="bg-primary py-3 text-xl hover:underline hover:bg-primary-shade hover:rounded-3xl">
            <a href="/cv">
              <div>CV</div>
            </a>
          </li>
          <li className="bg-primary py-3 text-xl hover:underline hover:bg-primary-shade hover:rounded-3xl rounded-r-3xl">
            <a href="/projects">
              <div>Projects</div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
