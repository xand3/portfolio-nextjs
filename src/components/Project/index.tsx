import Image from "next/image";
import React from "react";

type Props = {
  title: String;
  description: String;
  repositoryLink: String;
  projectLink: String;
};

const Project = ({
  title,
  description,
  repositoryLink,
  projectLink,
}: Props) => {
  return (
    <div className="flex flex-row h-36">
      <div className="flex flex-col">
        <div>
          <a
            className="cool-link text-2xl my-2"
            href={`${projectLink}`}
            target="_blank"
          >
            {title}
          </a>
        </div>

        <p className="">{description}</p>

        <div className="mt-4">
          <a className="cool-link" href={`${repositoryLink}`} target="_blank">
            SEE MORE
          </a>
        </div>
      </div>

      <div className="">
        <a
          href={`${projectLink}`}
          target="_blank"
        >
          <Image
          className=""
          src="/pokedex.png"
          alt="Pokedex"
          width={400}
          height={0}
        />
        </a>
        
      </div>
    </div>
  );
};

export default Project;
