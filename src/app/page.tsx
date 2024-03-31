import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8 pt-6">
      <div className="grid grid-cols-2">
        <div className="w-full h-full pr-3">
          <p className="text-left">
            My name is Kristian. I am a 23 year old guy from Drøbak in Norway. I
            am currently studying computer science at the University of Bergen.
          </p>
        </div>
        <div className="w-full h-full pl-3">
          <img
            src={"profile_picture.png"}
            alt=""
            width=""
            height=""
            className="border rounded-xl"
          />
        </div>
      </div>
      <div className=" w-full flex justify-around h-full pb-10">
        <a href="https://github.com/KristianElde" className="h-20 w-20">
          <div className="w-full h-full">
            <FaGithub className="w-full h-full" />
          </div>
        </a>
        <a
          href="https://linkedin.com/in/kristian-elde-johansen"
          className="h-20 w-20"
        >
          <FaLinkedin className="w-full h-full" />
        </a>
        <a href="mailto:kristian.elde.johansen@gmail.com" className="h-20 w-20">
          <MdEmail className="w-full h-full" />
        </a>
      </div>
    </div>
  );
}
