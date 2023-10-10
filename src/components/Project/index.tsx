import Image from "next/image";
import React from "react";

type Props = {
  title: String;
  description: String;
  repositoryLink: String;
  projectLink: String;
  imgSrc: String;
};

const Project = ({
  title,
  description,
  repositoryLink,
  projectLink,
  imgSrc,
}: Props) => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="">
        <div>
          <a
            className="cool-link text-2xl my-2"
            href={`${projectLink}`}
            target="_blank"
          >
            {title}
          </a>
        </div>

        <p className="text-justify mr-4">{description}</p>

        <div className="mt-4">
          <a className="cool-link" href={`${repositoryLink}`} target="_blank">
            SEE MORE
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <a href={`${projectLink}`} target="_blank">
          <Image
            className="rounded-xl w-72 object-fill"
            src={`${imgSrc}`}
            alt="Pokedex"
            width={0}
            height={0}
            sizes="100%"
          />
        </a>
      </div>
    </div>
  );
};

export default Project;
