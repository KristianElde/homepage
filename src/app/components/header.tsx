import ThemeSwitcher from "./themeSwitcher";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center mx-4 px-8 pt-3 border-b-2">
        <h1 className="hidden md:block text-4xl font-sans  ">
          Kristian Elde Johansen - Homepage
        </h1>
        <h1 className="block md:hidden text-4xl font-sans border-b">
          Kristian - Homepage
        </h1>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
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
