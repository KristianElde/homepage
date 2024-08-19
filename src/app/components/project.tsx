/* eslint-disable @next/next/no-img-element */
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export type ProjectProps = {
  projectName: string;
  imgPath: string;
  github: string;
  description: string;
};

export function Project(props: ProjectProps) {
  return (
    <>
      <ul>
        <li>
          <h3>{props.projectName}</h3>
        </li>
        <li>
          <p>{props.description}</p>
        </li>
        <li>
          <div>
            <h4>Check out on github!</h4>
            <a href={props.github}>
              <div>
                <FaGithub />
              </div>
            </a>
          </div>
        </li>
      </ul>
      <img src={props.imgPath} alt="" />
    </>
  );
}
