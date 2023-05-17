import Image from "next/image";

type Props = {
  width: number;
};

const ImgAstronaut = ({ width }: Props) => {
  return (
    <div className="flex justify-center">
      <Image
        className="max-xl:w-tablet max-lg:w-64"
        src="/astronaut.png"
        alt="astrounaut"
        width={width}
        height={600}
      />
    </div>
  );
};

export default ImgAstronaut;
