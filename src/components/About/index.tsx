import Img from "../Image/index";

const About = () => {
  return (
    <div className="flex flex-col px-40 space-y-10 h-128">
      <div className="flex flex-row justify-around max-lg:flex-col">
        <div className="flex flex-col h-128 justify-center max-lg:h-tablet w-128 max-lg:w-tablet">
          <h1 className="text-5xl font-light max-lg:text-4xl">
            Hi! I&apos;m Alexandre Bastos
          </h1>

          <p className="text-1xl py-10 text-justify">
            Hello, my name is Alexandre Bastos. I consider myself a technology
            enthusiast and am always seeking to learn new technologies to
            understand how applications really work. Currently, I am studying
            Software Engineering, where I have exposure to the fundamentals of
            systems development. In addition to college, I seek technical
            knowledge through bootcamps and courses related to programming and
            development.
          </p>

          
        </div>
        <div className="">
          <Img width={600}/>
        </div>
      </div>
    </div>
  );
};

export default About;
