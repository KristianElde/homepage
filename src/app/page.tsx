import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
        <li className=" w-full flex justify-around h-full">
          <a href="https://github.com/KristianElde">
            <div className="w-full h-full">
              <FaGithub />
            </div>
          </a>
          <a href="linkedin.com/in/kristian-elde-johansen">
            <FaLinkedin />
          </a>
          <a>
            <MdEmail />
          </a>
        </li>
      </ul>
    </>
  );
}
