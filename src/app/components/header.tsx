export default function Header() {
  return (
    <>
      <h1 className="flex justify-center text-4xl pt-3">
        Kristian Elde Johansen - Homepage
      </h1>
      <div>
        <ul className="grid grid-cols-3 text-center rounded-3xl m-10">
          <li className="bg-blue-400 py-5 text-xl hover:underline rounded-l-3xl">
            <a href="./">
              <div>Home</div>
            </a>
          </li>
          <li className="bg-blue-500 py-5 text-xl hover:underline">
            <a href="/cv">
              <div>CV</div>
            </a>
          </li>
          <li className=" bg-blue-400 py-5 text-xl hover:underline rounded-r-3xl">
            <a href="/projects">
              <div>Projects</div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
