import Image from "next/image"

const Resume = () => {
  return (
    <div className="flex flex-col px-40 space-y-10 h-128">
      <div className="flex flex-row justify-around max-lg:flex-col">
        <div className="flex flex-col h-128 justify-center max-lg:h-tablet w-128">
          <h1 className="text-5xl font-light max-lg:text-4xl">Hi! I&apos;m Alexandre Bastos</h1>

          <p className="text-1xl py-10">
          Hello, my name is Alexandre Bastos. I consider myself a technology enthusiast and am always seeking to learn new technologies to understand how applications really work. 

          Currently, I am studying Software Engineering, where I have exposure to the fundamentals of systems development. In addition to college, I seek technical knowledge through bootcamps and courses related to programming and development.
          </p>

          <div className="flex flex-col py-14 max-lg:py-3">
            <a href="" className="hover:text-hovertext py-5">
              see more about me
            </a>
            <div className="flex">
              <a href="">
                <Image 
                  src="/github.png"
                  alt="github"
                  width={30}
                  height={30}
                />
              </a>
              <a href="">
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex xl:w-max justify-center object-none max-lg:h-60">
          <Image className="object-cover max-lg:object-contain max-lg:h-tablet"
            src="/astronaut.png"
            alt="astrounaut"
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default Resume