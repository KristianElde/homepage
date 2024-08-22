"use client";

/* eslint-disable @next/next/no-img-element */
import { FaGithub } from "react-icons/fa6";

export type ProjectProps = {
  projectName: string;
  imgPath: string;
  github: string;
  description: string;
  link: string | unknown;
};

export function Project({ props, i }: { props: ProjectProps; i: number }) {
  return (
    <div className="grid grid-cols-5 gap-5 border rounded-xl border-black shadow-lg p-4">
      <ul
        className={`col-span-3 ${
          i % 2 === 0 ? "order-1" : "order-3 text-right"
        }`}
      >
        <li>
          <h3>{props.projectName}</h3>
        </li>
        <li>
          <p className="">{props.description}</p>
        </li>
        <li>
          <div className="flex flex-row space-x-4">
            <a href={props.github}>
              <div className="pt-1.5">
                <FaGithub />
              </div>
            </a>
            <h4>Check out on github!</h4>
          </div>
        </li>
      </ul>
      <div
        className={`w-full h-full pl-3 col-span-2 ${
          i % 2 === 0 ? "order-4" : "order-1"
        }`}
      >
        <img className="rounded-xl" src={props.imgPath} alt="" />
      </div>
    </div>
  );
}
