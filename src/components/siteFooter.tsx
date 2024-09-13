import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function SiteFooter() {
  return (
    <div className=" w-full flex justify-around h-full pb-5 pt-16">
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
  );
}
