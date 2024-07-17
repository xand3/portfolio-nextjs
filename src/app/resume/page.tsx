import { MainArea } from "@/components/Main";
import { LeftArea } from "@/components/LeftArea";
import { ImgAstronaut } from "@/components/Img";

export default function ResumePage() {
  return (
    <MainArea>
      <LeftArea myClasses="justify-center">
        <embed
          className="max-sm:h-72"
          src="/doc/Alexandre Bastos.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </LeftArea>

      <ImgAstronaut width={600} />
    </MainArea>
  );
}
