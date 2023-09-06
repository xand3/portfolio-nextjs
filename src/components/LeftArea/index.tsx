import React from "react"

type BoxProps = {
  children: React.ReactNode;
  myClasses: string
}

const LeftArea = ({children, myClasses}: BoxProps) => {
  return (
    <div className={`flex flex-col col-start-1 col-end-3 ${myClasses}`}>
      {children}
    </div>
  )
}

export default LeftArea