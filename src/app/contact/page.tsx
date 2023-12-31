import React from "react";
import { MainArea } from "../../components/Main";
import { LeftArea } from "../../components/LeftArea";
import { ImgAstronaut } from "../../components/Img";
import Image from "next/image";

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

export default function ContactPage() {
  return (
    <MainArea>
      <LeftArea myClasses="justify-center">
        <h1 className='text-5xl font-light max-lg:text-2xl py-5"'>Contact</h1>
        <p className="text-justify py-5">
          Feel free to get in touch with me through my social media or email.
        </p>
        <div className="flex space-x-10">
          {socials.map((item) => (
              <a href={item.href} target="_blank">
                <Image
                  key={item.name}
                  className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
                  src={item.src}
                  alt={item.name}
                  width={35}
                  height={35}
                />
              </a>
            ))}
        </div>
      </LeftArea>
      <div>
        <ImgAstronaut width={600} />
      </div>
    </MainArea>
  );
}
