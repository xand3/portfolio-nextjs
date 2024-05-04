import React from "react";
import { MainArea } from "@/components/Main";
import { LeftArea } from "@/components/LeftArea";
import { ImgAstronaut } from "@/components/Img";
import Image from "next/image";

const tecnologies = [
  {
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "ReactJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },
  {
    name: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "NEXT.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
  },
];

export default function AboutPage() {
  return (
    <MainArea>
      <LeftArea myClasses="justify-center">
        <h1 className="text-5xl font-light max-lg:text-2xl py-5">
          Hi! I&apos;m Alexandre Bastos
        </h1>
        <p className="text-justify py-5">
          Hello, my name is Alexandre Bastos. I consider myself a technology
          enthusiast and am always seeking to learn new technologies to
          understand how applications really work. Currently, I am studying
          Software Engineering, where I have exposure to the fundamentals of
          systems development. In addition to college, I seek technical
          knowledge through bootcamps and courses related to programming and
          development.
        </p>
        <div className="flex flex-col space-y-2">
          <div>
            <p>My Stack:</p>
          </div>

          <div className="grid grid-cols-3 w-auto gap-5 max-sm:grid-cols-2">
            {tecnologies.map((item, index) => (
              <div key={index} className="flex space-x-3 justify-left items-center ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
                <div className="flex items-center">
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={item.name}
                  />
                  <p className="text-md mx-2">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LeftArea>
      <div className="">
        <ImgAstronaut width={600} />
      </div>
    </MainArea>
  );
}
