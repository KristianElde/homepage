import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8 pt-6">
      <div className="grid grid-cols-2">
        <div className="w-full h-full pr-3">
          <p className="text-left 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl">
            My name is Kristian. I am a 23 year old guy from Drøbak in Norway. I
            am currently studying computer science at the University of Bergen.
          </p>
        </div>
        <div className="w-full h-full pl-3">
          <img
            src="profile_picture.png"
            alt=""
            width=""
            height=""
            className="border rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
