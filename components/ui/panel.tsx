import React from "react"

type Props = Readonly<{
  children: React.ReactNode;
  outerClassNames?: string,
  innerClassNames?: string,
}>

export default function Panel({ children, outerClassNames, innerClassNames }: Props) {


    return (
        <div className={`bg-panel-texture bg-cover bg-center border border-opacity-40 border-white rounded-sm shadow-md shadow-slate-950/100 ${outerClassNames}`}>
          <div className={`p-8 shadow-inner bg-sky-950 bg-opacity-30 backdrop-blur-[1px] ${innerClassNames}`}>
            {children}
          </div>
        </div>
    )
};