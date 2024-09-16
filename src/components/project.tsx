"use client";

/* eslint-disable @next/next/no-img-element */
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "./sectionHeader";
import { GiStack } from "react-icons/gi";
import { useLang } from "@/hooks/useLang";

export type ProjectProps = {
  projectNameEN: string;
  projectNameNO: string;
  imgPath: string;
  github: string;
  descriptionEN: string;
  descriptionNO: string;
  stack: string;
  link: string;
};

export function Project({ props, i }: { props: ProjectProps; i: number }) {
  const [language, changeLanguage] = useLang();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 border rounded-xl shadow-lg p-4">
      <ul
        className={`col-span-1 lg:col-span-3 ${
          i % 2 === 0 ? "order-1" : "order-1 lg:order-3 lg:text-right"
        }`}
      >
        <li>
          <SectionHeader
            name={language === "en" ? props.projectNameEN : props.projectNameNO}
          ></SectionHeader>
        </li>
        <li className="py-5">
          <p>{language === "en" ? props.descriptionEN : props.descriptionNO}</p>
          {props.projectNameEN === "Retail Repair data dashboard" ? (
            <div className="pt-3 pb-5">
              <p>{language === "en" ? "Log in with," : "Logg inn med,"}</p>
              <p>Username: mockdata</p>
              <p>Password: Mockdata123</p>
              <p>
                {"for "}
                <a
                  href={props.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline font-bold"
                >
                  {language === "en" ? "proof of concept-app" : "konseptside"}
                </a>
              </p>
            </div>
          ) : null}
        </li>
        <li className="pb-4">
          <div
            className={`flex ${
              i % 2 != 0 ? "lg:flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="pt-1.5">
              <GiStack />
            </div>
            <h4 className="mx-4">{props.stack}</h4>
          </div>
        </li>
        <li>
          {props.github != "" ? (
            <a href={props.github} target="_blank" rel="noreferrer noopener">
              <div
                className={`flex ${
                  i % 2 != 0 ? "lg:flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="pt-1.5">
                  <FaGithub />
                </div>
                <h4 className="mx-4">Check out on github!</h4>
              </div>
            </a>
          ) : null}
          {props.link != "none" ? (
            <a href={props.link} target="_blank" rel="noreferrer noopener">
              <div
                className={`flex ${
                  i % 2 != 0 ? "lg:flex-row-reverse" : "flex-row"
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
        className={`w-full h-full space-y-6 pl-3 col-span-1 lg:col-span-2 flex flex-col justify-center items-center ${
          i % 2 === 0 ? "order-4" : "order-4 lg:order-1"
        }`}
      >
        <img className="rounded-xl" src={props.imgPath} alt="" />
        {props.projectNameEN === "Retail Repair data dashboard" ? (
          <img className="rounded-xl" src="rr-pie.png" alt="" />
        ) : null}
      </div>
    </div>
  );
}
