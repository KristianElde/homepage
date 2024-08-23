"use client";

/* eslint-disable @next/next/no-img-element */
import { FaGithub } from "react-icons/fa6";
import SectionHeader from "./sectionHeader";

export type ProjectProps = {
  projectName: string;
  imgPath: string;
  github: string;
  description: string;
  link: string;
};

export function Project({ props, i }: { props: ProjectProps; i: number }) {
  return (
    <div className="grid grid-cols-5 gap-5 border rounded-xl  shadow-lg p-4">
      <ul
        className={`col-span-3 ${
          i % 2 === 0 ? "order-1" : "order-3 text-right"
        }`}
      >
        <li>
          <SectionHeader name={props.projectName}></SectionHeader>
        </li>
        <li>
          <p className="py-5">
            {props.description === "lorem"
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              : props.description}
          </p>
        </li>
        <li>
          <div
            className={`flex flex-row space-x-4 ${
              i % 2 != 0 ? "justify-end" : null
            }`}
          >
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
