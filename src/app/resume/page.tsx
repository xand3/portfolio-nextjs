import MainArea from "@/components/Main"
import LeftArea from "@/components/LeftArea"
import ImgAstronaut from "@/components/Img"

export default function ResumePage() {
  return (
    <MainArea>
      <LeftArea>
        <embed className="max-sm:h-72" src="/my-resume.pdf" type="application/pdf" width="100%" height="100%" />
      </LeftArea>
      <div>
        <ImgAstronaut width={600}/>
      </div>
    </MainArea>
  )
}