import React from "react";
import MainArea from "../../components/Main";
import LeftArea from "../../components/LeftArea";
import ImgAstronaut from "../../components/Img";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <MainArea>
      <LeftArea myClasses="justify-start">
        <h1 className="text-5xl font-light max-lg:text-2xl py-5">Projects</h1>
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="h-8">
            projeto 1
          </div>
          <div className="h-8">
            projeto 2
          </div>
          <div>
            projeto 3
          </div>
          <div>
            projeto 4
          </div>
        </div>
      </LeftArea>
      <div>
        <ImgAstronaut width={600} />
      </div>
    </MainArea>
  );
}
