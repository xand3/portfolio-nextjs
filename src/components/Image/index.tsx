import Image from "next/image";

type Props = {
  width: number
}

const Img = ({width}:Props) => {
  return (
    <Image
      className=" max-xl:w-tablet"
      src="/astronaut.png"
      alt="astrounaut"
      width={width}
      height={600}
    />
  );
};

export default Img;