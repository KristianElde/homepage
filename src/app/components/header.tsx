export default function Header() {
  return (
    <>
      <div>
        <ul className="grid grid-cols-3 text-center">
          <li className="bg-blue-400">
            <a href="../">
              <div>Home</div>
            </a>
          </li>
          <li className="bg-blue-500">
            <a href="/cv">
              <div>CV</div>
            </a>
          </li>
          <li className=" bg-blue-400">
            <a href="/projects">
              <div>Projects</div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
