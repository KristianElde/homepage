/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <ul className="flex flex-col items-center space-y-8">
        <li className="w-2/3">
          <p className="text-center">
            My name is Kristian. I am a 23 year old guy from Norway, currently
            studying computer science at the University of Bergen.
          </p>
        </li>
        <li className="">
          <img
            src={"profile_picture.png"}
            alt=""
            width="500"
            height="350"
            className="border rounded-lg"
          />
        </li>
      </ul>
    </>
  );
}
