import React from "react";
import MainArea from "@/components/Main";
import LeftArea from "@/components/LeftArea";
import ImgAstronaut from "@/components/Img";
import Image from "next/image";

export default function AboutPage() {
  return (
    <MainArea>
      <LeftArea myClasses = "justify-center">
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
            <div className="flex space-x-3 justify-left items-center ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                width={35}
                height={35}
              />
              <p className="">HTML 5</p>
            </div>

            <div className="flex space-x-3 justify-left items-center ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
                width={35}
                height={35}
              />
              <p className="">CSS 3</p>
            </div>

            <div className="flex space-x-3 justify-left items-center ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                alt="Java"
                width={35}
                height={35}
              />
              <p className="">Java</p>
            </div>

            <div className="flex space-x-3 justify-left items-center ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                width={35}
                height={35}
              />
              <p className="">JavaScript</p>
            </div>

            <div className="flex space-x-3 justify-left  items-center ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                width={35}
                height={35}
              />
              <p className="">TypeScript</p>
            </div>

            <div className="flex space-x-3 justify-left  items-center ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                alt="Reactjs"
                width={35}
                height={35}
              />
              <p className="">ReactJS</p>
            </div>

            <div className="flex space-x-3 justify-left  items-center ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="NodeJS"
                width={35}
                height={35}
              />
              <p className="">NodeJS</p>
            </div>

            <div className="flex space-x-3 justify-left  items-center ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                width={35}
                height={35}
              />
              <p className="">Git</p>
            </div>

            <div className="flex space-x-3 justify-left  items-center ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                alt="Git"
                width={35}
                height={35}
              />
              <p className="">Tailwind CSS</p>
            </div>

            <div className="flex space-x-3 justify-left  items-center ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                alt="Git"
                width={35}
                height={35}
              />
              <p className="">PostgreSQL</p>
            </div>

          </div>
        </div>
      </LeftArea>
      <div className="">
        <ImgAstronaut width={600} />
      </div>
    </MainArea>
  );
}
