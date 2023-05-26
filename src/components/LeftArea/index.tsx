import React from "react"

type BoxProps = {
  children: React.ReactNode;
  myClasses: string
}

const LeftArea = ({children, myClasses}: BoxProps) => {
  return (
    <div className={`${myClasses} flex flex-col col-start-1 col-end-3`}>
      {children}
    </div>
  )
}

export default LeftArea