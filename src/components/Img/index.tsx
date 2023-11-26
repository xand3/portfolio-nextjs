import Image from "next/image";

type Props = {
  width: number;
};

export const ImgAstronaut = ({ width }: Props) => {
  return (
    <div className="flex justify-center">
      <Image
        className="max-xl:w-tablet max-lg:w-64"
        src="/images/astronaut.png"
        alt="astrounaut"
        width={width}
        height={600}
        priority={true}
      />
    </div>
  );
};
