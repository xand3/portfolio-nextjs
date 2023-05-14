import Img from "../Image/index";
import Image from "next/image";

const Main = () => {
  return (
    <main className="flex flex-col px-40 space-y-10 h-128">
      <div className="flex flex-row justify-between max-lg:flex-col ">
        <div className="flex flex-col h-128 justify-center max-lg:h-tablet">
          <h1 className="text-5xl font-light max-lg:text-4xl">Hi! I&apos;m Alexandre Bastos</h1>

          <p className="text-1xl py-10 text-justify">
            Software engineer with experience in the Javascript/TypeScript
            stack, technology enthusiast, always seeking to learn new technologies,
            currently open to work.
          </p>

          <div className="flex max-lg:py-3">
          <div className="flex flex-col py-5 max-lg:py-3">
            <a href="" className="cool-link py-5">
              see more about me
            </a>
            <div className="flex space-x-3">
              <a href="https://github.com/xand3" target="_blank">
                <Image className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                src="/GitHub.png" 
                alt="github" 
                width={25} 
                height={25} 
                />
              </a>
              <a href="https://www.instagram.com/xande.log/?igshid=OTk0YzhjMDVlZA%3D%3D" target="_blank">
                <Image className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                  src="/instagram.png"
                  alt="Instagram"
                  width={25}
                  height={25}
                />
              </a>
              <a href="https://www.linkedin.com/in/alexandr3-bastos/" target="_blank">
                <Image className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                  src="/linkedin.png"
                  alt="linkedin"
                  width={25}
                  height={25}
                />
              </a>
              <a href="https://twitter.com/xand3bastos" target="_blank">
                <Image className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                  src="/twitter.png"
                  alt="Twitter"
                  width={25}
                  height={25}
                />
              </a>
              <a href="mailto:xande.dev@outlook.com" target="_blank">
                <Image className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                  src="/email.png"
                  alt="beacons"
                  width={25}
                  height={25}
                />
              </a>
              <a href="https://beacons.ai/xande_dev" target="_blank">
                <Image className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                  src="/links.png"
                  alt="beacons"
                  width={25}
                  height={25}
                />
              </a>
            </div>
          </div>
            
          </div>
        </div>
        <div className="">
          <Img width={800}/>
        </div>
      </div>
    </main>
  );
};

export default Main;
