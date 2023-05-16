import Img from "../Image/index";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col px-40 space-y-10 h-128 max-lg:items-center">
      <div className="flex flex-row justify-around max-lg:flex-col">
        <div className="flex flex-col h-128 justify-center max-lg:h-tablet w-128 max-lg:w-tablet">
          <h1 className="text-5xl font-light max-lg:text-4xl">
            Hi! I&apos;m Alexandre Bastos
          </h1>

          <p className="text-1xl py-10 text-justify">
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
            <div className="flex space-x-4">
            <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
                width={35}
                height={35}
              />
            <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                width={35}
                height={35}
              />
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                width={35}
                height={35}
              />
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                width={35}
                height={35}
              />
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                alt="Reactjs"
                width={35}
                height={35}
              />
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="NodeJS"
                width={35}
                height={35}
              />
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                width={35}
                height={35}
              />
            </div>
          </div>
        </div>
        <div className="">
          <Img width={600} />
        </div>
      </div>
    </div>
  );
};

export default About;
