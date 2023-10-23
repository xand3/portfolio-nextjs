import React from "react";
import { MainArea } from "../../components/Main";
import { LeftArea } from "../../components/LeftArea";
import { ImgAstronaut } from "../../components/Img";
import Image from "next/image";

export default function ContactPage() {
  return (
    <MainArea>
      <LeftArea myClasses="justify-center">
        <h1 className='text-5xl font-light max-lg:text-2xl py-5"'>Contact</h1>
        <p className="text-justify py-5">
          Feel free to get in touch with me through my social media or email.
        </p>
        <div className="flex space-x-10">
          <a
            href="https://www.linkedin.com/in/alexandr3-bastos/"
            target="_blank"
          >
            <Image
              className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
              src="/linkedin.png"
              alt="linkedin"
              width={50}
              height={50}
            />
          </a>

          <a href="https://twitter.com/xand3bastos" target="_blank">
            <Image
              className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
              src="/twitter.png"
              alt="Twitter"
              width={50}
              height={50}
            />
          </a>

          <a href="mailto:xande.dev@outlook.com" target="_blank">
            <Image
              className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
              src="/email.png"
              alt="beacons"
              width={50}
              height={50}
            />
          </a>

          <a href="https://github.com/xand3" target="_blank">
            <Image
              className="ease-in-out duration-300 hover:-translate-y-1 hover:scale-110"
              src="/GitHub.png"
              alt="GitHub"
              width={50}
              height={50}
            />
          </a>
        </div>
      </LeftArea>
      <div>
        <ImgAstronaut width={600} />
      </div>
    </MainArea>
  );
}
