import React from "react";
import { MainArea } from "../../components/Main";
import { LeftArea } from "../../components/LeftArea";
import { Project } from "@/components/Project";

const projects = [
  {
    title: "Finance App",
    imgSrc: "/images/jogo.png",
    description:
      "In this project, I developed the front-end of a personal finance management application using React.js/Next.js and Tailwind CSS.  the goal is to create a user-friendly and intuitive interface for users to effectively manage their financial activities.",
    repositoryLink: "https://github.com/xand3/finance-app",
    projectLink: "https://finances-seven-tau.vercel.app/",
  },
  {
    title: "Codificador",
    imgSrc: "/images/codificador.png",
    description:
      "In this challenge during the Oracle training, I had to develop a text encoder using HTML and CSS to build the project's layout, and JavaScript to implement the encryption logic.",
    repositoryLink: "https://github.com/xand3/Codificador-Challenge-Oracle",
    projectLink: "https://xand3.github.io/Codificador-Challenge-Oracle/",
  },
  {
    title: "Jogo da forca",
    imgSrc: "/images/jogo-da-forca.png",
    description:
      "In this challenge during the Oracle training, I had to develop a Hangman game using HTML and CSS to create the project's layout and JavaScript to implement the game logic.",
    repositoryLink: "https://github.com/xand3/JogoDaForca-Challenge-Oracle",
    projectLink: "https://xand3.github.io/JogoDaForca-Challenge-Oracle/",
  }
];

export default function ProjectsPage() {
  return (
    <MainArea>
      <LeftArea myClasses="col-end-4 justify-items-stretch">
        <h1 className="text-5xl font-light max-lg:text-2xl py-5">
          My Projects: This page is under construction
        </h1>

        <div
          className={`grid grid-cols-2 grid-rows-auto gap-y-12 gap-x-8 max-sm:grid-cols-1 max-sm:gap-y-28`}
        >
          {projects.map((item) => (
            <Project
              key={item.title}
              title={item.title}
              description={item.description}
              imgSrc={item.imgSrc}
              projectLink={item.projectLink}
              repositoryLink={item.repositoryLink}
            />
          ))}
        </div>
      </LeftArea>
    </MainArea>
  );
}
