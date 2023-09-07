import React from "react";
import MainArea from "../../components/Main";
import LeftArea from "../../components/LeftArea";
import ImgAstronaut from "../../components/Img";
import Project from "@/components/Project";

export default function ProjectsPage() {
  return (
    <MainArea>
      <LeftArea myClasses="justify-start col-end-4">
        <h1 className="text-5xl font-light max-lg:text-2xl py-5">
          My Projects: This page is in production
        </h1>

        <div className={`grid grid-cols-2 grid-rows-auto gap-y-12 gap-x-8 max-sm:grid-cols-1 max-sm:gap-y-28`}>
          
          <Project title={"Pokedex"} description={"In this project, I have developed an online Pokédex: a virtual encyclopedia that contains all Pokémon species."} repositoryLink={"https://github.com/xand3/pokedex-dioBootcamp"} projectLink={"https://xand3.github.io/pokedex-dioBootcamp/"} />

          <Project title={"Pokedex"} description={"In this project, I have developed an online Pokédex: a virtual encyclopedia that contains all Pokémon species."} repositoryLink={"https://github.com/xand3/pokedex-dioBootcamp"} projectLink={"https://xand3.github.io/pokedex-dioBootcamp/"} />


        </div>
      </LeftArea>
      
    </MainArea>
  );
}
