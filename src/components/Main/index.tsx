import React from "react";

type BoxProps = {
  children: React.ReactNode; 
}

const MainArea = ({children}: BoxProps) => {
  return (
    <main className="grid grid-row-2 grid-cols-3 h-full gap-3 max-md:flex max-md:flex-col px-10 py-8">
      {children}
    </main>
  )
}

export default MainArea;