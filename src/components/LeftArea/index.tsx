import React from "react"

type BoxProps = {
  children: React.ReactNode;
}

const LeftArea = ({children}: BoxProps) => {
  return (
    <div className="flex flex-col justify-center col-start-1 col-end-3">
      {children}
    </div>
  )
}

export default LeftArea