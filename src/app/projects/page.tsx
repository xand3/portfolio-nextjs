import React from "react";
import MainArea from "../../components/Main";
import LeftArea from "../../components/LeftArea";
import ImgAstronaut from "../../components/Img";
import Project from "@/components/Project";

export default function ProjectsPage() {
  return (
    <MainArea>
      <LeftArea myClasses="justify-start">
        <h1 className="text-5xl font-light max-lg:text-2xl py-5">
          My Projects: This page is in production
        </h1>

        <div className={`grid grid-cols-2 grid-rows-auto gap-y-28 gap-x-8 `}>
          <Project title={"Pokedex"} description={"Pokedex online"} />

          <Project title={"Pokedex"} description={"Pokedex online"} />

          <Project title={"Pokedex"} description={"Pokedex online"} />

          <Project title={"Pokedex"} description={"Pokedex online"} />
        </div>
      </LeftArea>
      <div>
        <ImgAstronaut width={600} />
      </div>
    </MainArea>
  );
}
