"use client";

/* eslint-disable @next/next/no-img-element */
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "./sectionHeader";
import { GiStack } from "react-icons/gi";

export type ProjectProps = {
  projectName: string;
  imgPath: string;
  github: string;
  description: string;
  stack: string;
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
        <li className="pb-4">
          <div
            className={`flex ${i % 2 != 0 ? "flex-row-reverse" : "flex-row"}`}
          >
            <div className="pt-1.5">
              <GiStack />
            </div>
            <h4 className="mx-4">{props.stack}</h4>
          </div>
        </li>
        <li>
          <a href={props.github} target="_blank" rel="noreferrer noopener">
            <div
              className={`flex ${i % 2 != 0 ? "flex-row-reverse" : "flex-row"}`}
            >
              <div className="pt-1.5">
                <FaGithub />
              </div>
              <h4 className="mx-4">Check out on github!</h4>
            </div>
          </a>
          {props.link != "none" ? (
            <a href={props.link} target="_blank" rel="noreferrer noopener">
              <div
                className={`flex ${
                  i % 2 != 0 ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="pt-1.5">
                  <FaExternalLinkAlt />
                </div>
                <h4 className="mx-4">Check out the project!</h4>
              </div>
            </a>
          ) : null}
        </li>
      </ul>
      <div
        className={`w-full h-full pl-3 col-span-2 ${
          i % 2 === 0 ? "order-4" : "order-1"
        }`}
      >
        <img className="rounded-xl " src={props.imgPath} alt="" />
      </div>
    </div>
  );
}
