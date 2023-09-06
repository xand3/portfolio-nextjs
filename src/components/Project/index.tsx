import Image from "next/image";
import React from "react"

type Props = {
  title: String;
  description: String;
}

const Project = ({ title, description }: Props) => {
  return (
    <div className="h-20 flex flex-row justify-between">
      <div className="">
        <h1 className="text-2xl">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="">
        <Image className="h-40" src="/pokedex.png" alt="Pokedex" width={200} height={50}/>
      </div>
      
    </div>
  )
}

export default Project