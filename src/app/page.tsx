export default function Home() {
  return (
    <>
      <h1 className="flex justify-center">Kristians homepage</h1>
      <ul className="flex-col justify-center">
        <li className="">
          <img src={"profile_picture.png"} alt="" width="500" height="350" />
        </li>
        <li>
          <a href="/cv">
            <div>Gå til min CV</div>
          </a>
        </li>
      </ul>
    </>
  );
}
