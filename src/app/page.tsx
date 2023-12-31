import Image from "next/image";

import { MainArea } from "@/components/Main";
import { LeftArea } from "@/components/LeftArea";
import { ImgAstronaut } from "@/components/Img";

const socials = [
  {
    name: "GitHub",
    src: "/icons/GitHub.png",
    href: "https://github.com/xand3",
  },
  {
    name: "linkedin",
    src: "/icons/linkedin.png",
    href: "https://www.linkedin.com/in/alexandr3-bastos/",
  },
  {
    name: "E-mail",
    src: "/icons/email.png",
    href: "mailto:xande.dev@outlook.com",
  },
  {
    name: "Beacons",
    src: "/icons/links.png",
    href: "https://beacons.ai/xande_dev",
  },
];

export default function Home() {
  return (
    <MainArea>
      <LeftArea myClasses="justify-center">
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
            {socials.map((item) => (
              <a href={item.href} target="_blank">
                <Image
                  className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                  src={item.src}
                  alt={item.name}
                  width={35}
                  height={35}
                />
              </a>
            ))}
          </div>
        </div>
      </LeftArea>
      <div>
        <ImgAstronaut width={600} />
      </div>
    </MainArea>
  );
}
