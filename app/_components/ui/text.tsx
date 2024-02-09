import React from "react"

type Props = {
    children: React.ReactNode,
}

export default function Text({ children }: Props) {
    return (
        <p className='text-xs rounded-full w-fit font-extralight pb-2 shadow-[0px_0px_20px_17px_rgb(80,181,253,0.05),inset_0px_0px_0px_20px_rgb(80,181,253,0.05)]' style={{ 
            textShadow: '0px 1px 4px white, 0px 3px 0px rgb(85, 138, 187, 0.3)'
        }}>{children}</p>
    )
}
