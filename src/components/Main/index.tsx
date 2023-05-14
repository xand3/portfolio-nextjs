import Image from "next/image";

const Main = () => {
  return (
    <main className="flex flex-col px-40 space-y-10 h-128">
      <div className="flex flex-row justify-around max-lg:flex-col">
        <div className="flex flex-col h-128 justify-center max-lg:h-tablet">
          <h1 className="text-5xl font-light max-lg:text-4xl">Hi! I&apos;m Alexandre Bastos</h1>

          <p className="text-1xl py-10">
            Software engineer with experience in the Javascript/TypeScript
            stack, technology enthusiast, always seeking to learn new technologies,
            currently open to work.
          </p>

          <div className="flex py-14 max-lg:py-3">
            <a href="" className="hover:text-hovertext">
              see more about me
            </a>
          </div>
        </div>
        <div className="flex xl:w-max justify-center object-none max-lg:h-60">
          <Image className="object-cover max-lg:object-contain max-lg:h-tablet"
            src="/astronaut.png"
            alt="astrounaut"
            width={650}
            height={500}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
