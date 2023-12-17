import React from "react";
import { MainArea } from "../../components/Main";
import { LeftArea } from "../../components/LeftArea";
import { ImgAstronaut } from "../../components/Img";
import { Project } from "@/components/Project";

export default function ProjectsPage() {
  return (
    <MainArea>
      <LeftArea myClasses="col-end-4 justify-items-stretch">
        <h1 className="text-5xl font-light max-lg:text-2xl py-5">
          My Projects
        </h1>

        <div className={`grid grid-cols-2 grid-rows-auto gap-y-12 gap-x-8 max-sm:grid-cols-1 max-sm:gap-y-28`}>

          <Project imgSrc={"/images/codificador.png"} title={"Codificador"} description={"In this challenge during the Oracle training, I had to develop a text encoder using HTML and CSS to build the project's layout, and JavaScript to implement the encryption logic."} repositoryLink={"https://github.com/xand3/Codificador-Challenge-Oracle"} projectLink={"https://xand3.github.io/Codificador-Challenge-Oracle/"} />

          <Project imgSrc={"/images/jogo-da-forca.png"} title={"Jogo da forca"} description={"In this challenge during the Oracle training, I had to develop a Hangman game using HTML and CSS to create the project's layout and JavaScript to implement the game logic."} repositoryLink={"https://github.com/xand3/JogoDaForca-Challenge-Oracle"} projectLink={"https://xand3.github.io/JogoDaForca-Challenge-Oracle/"} />

        </div>
      </LeftArea>
      
    </MainArea>
  );
}
