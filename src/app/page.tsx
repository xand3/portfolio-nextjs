import MainArea from "@/components/Main";
import LeftArea from "@/components/LeftArea";
import ImgAstronaut from "@/components/Img";
import Image from "next/image";

export default function Home() {
  return (
    <MainArea>
      <LeftArea>
        <h1 className="text-5xl font-light max-lg:text-2xl py-5">
          Hi! I&apos;m Alexandre Bastos
        </h1>
        <p className="text-justify py-5">
          Software engineer with experience in the Javascript/TypeScript stack,
          technology enthusiast, always seeking to learn new technologies,
          currently open to work.
        </p>
        <div className="flex flex-col py-5 max-lg:py-3">
          <a href="/about" className="py-5">
            <p className="cool-link">see more about me</p>
          </a>
          <div className="flex space-x-3">
            <a href="https://github.com/xand3" target="_blank">
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                src="/GitHub.png"
                alt="github"
                width={35}
                height={35}
              />
            </a>
            <a
              href="https://www.instagram.com/xande.log/?igshid=OTk0YzhjMDVlZA%3D%3D"
              target="_blank"
            >
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                src="/instagram.png"
                alt="Instagram"
                width={35}
                height={35}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/alexandr3-bastos/"
              target="_blank"
            >
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                src="/linkedin.png"
                alt="linkedin"
                width={35}
                height={35}
              />
            </a>
            <a href="https://twitter.com/xand3bastos" target="_blank">
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                src="/twitter.png"
                alt="Twitter"
                width={35}
                height={35}
              />
            </a>
            <a href="mailto:xande.dev@outlook.com" target="_blank">
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                src="/email.png"
                alt="beacons"
                width={35}
                height={35}
              />
            </a>
            <a href="https://beacons.ai/xande_dev" target="_blank">
              <Image
                className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                src="/links.png"
                alt="beacons"
                width={35}
                height={35}
              />
            </a>
          </div>
        </div>
      </LeftArea>
      <div>
        <ImgAstronaut width={600} />
      </div>
    </MainArea>
  );
}
