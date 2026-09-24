"use client";

/* eslint-disable @next/next/no-img-element */

import Education, { type EducationProps } from "../../components/education";
import { Job, JobProps } from "../../components/job";
import Role, { RoleProps } from "../../components/role";
import SectionHeader from "../../components/sectionHeader";
import { useLang } from "../../hooks/useLang";
import SectionHeader2 from "@/components/sectionHeader2";
import cvEN from "../../../cv-content/cv.en.json";
import cvNO from "../../../cv-content/cv.no.json";

type PersonaliaProps = {
  q: string;
  a: string;
};

type SkillGroup = {
  category: string;
  skills: string;
};

type CVContent = {
  sections: {
    personalia: string;
    skills: string;
    education: string;
    jobs: string;
    roles: string;
  };
  personalia: PersonaliaProps[];
  skills: SkillGroup[];
  educations: EducationProps[];
  jobs: JobProps[];
  roles: RoleProps[];
};

const cvContent: Record<"en" | "no", CVContent> = {
  en: cvEN,
  no: cvNO,
};

export default function CV() {
  const language = useLang()[0];
  const cv = cvContent[language];

  return (
    <div className="lg:grid lg:grid-cols-4">
      <ul className=" mx-4 pt-8 text-md sm:space-x-6 space-y-6 sm:flex sm:flex-row grid-cols-2 lg:col-span-1 lg:flex-col lg:space-x-0">
        <li className="pt-6 lg:p-0 w-full sm:w-1/2 lg:w-full">
          <img
            src="profil_H24.JPG"
            alt=""
            width=""
            height=""
            className="border rounded-xl shadow-md"
          ></img>
        </li>
        <li className="border rounded-xl p-3 shadow-md  w-full sm:w-1/2 lg:w-full ">
          <SectionHeader2 name={cv.sections.personalia} />
          <ul className="pt-3 space-y-2">
            {cv.personalia.map((line, i) => {
              return (
                <li key={i}>
                  <p>{line.q}</p>
                  <strong>{line.a}</strong>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="hidden lg:block border rounded-xl p-3 shadow-md">
          <SectionHeader2 name={cv.sections.skills} />
          <ul className="pt-3 space-y-2">
            {cv.skills.map((skill) => {
              return (
                <li key={skill.category}>
                  <p>{skill.category}</p>
                  <strong>{skill.skills}</strong>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
      <ul className="mx-4 space-y-6 pt-8 text-md lg:col-span-3">
        <li className="border rounded-xl p-3 shadow-md">
          <SectionHeader name={cv.sections.education} />
          <ul className="space-y-6 pt-1">
            {cv.educations.map((education, i) => (
              <li key={i}>
                <Education {...education} />
              </li>
            ))}
          </ul>
        </li>
        <li className="border rounded-xl p-3 shadow-md">
          <SectionHeader name={cv.sections.jobs} />
          <ul className="space-y-6 pt-1">
            {cv.jobs.map((job, i) => (
              <li key={i}>
                <Job {...job} />
              </li>
            ))}
          </ul>
        </li>
        <li className="border rounded-xl p-3 shadow-md">
          <SectionHeader name={cv.sections.roles} />
          <ul className="space-y-6 pt-1">
            {cv.roles.map((role, i) => (
              <li key={i}>
                <Role {...role}></Role>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
