import React from "react"

type Props = {
    children: React.ReactNode,
}

export default function Header({ children }: Props) {
    return (
        <header className="border border-white border-opacity-30 mx-auto text-center w-fit px-14 py-1 relative after:content-[''] after:absolute after:right-[-1px] after:left-[-1px] after:top-[2px] after:bottom-[-3px] after:border after:border-white after:border-opacity-5">
            <p className='z-10 text-3xl font-mono tracking-widest uppercase rounded-full w-fit pb-1 shadow-[0px_0px_20px_17px_rgb(80,181,253,0.1),inset_0px_0px_0px_20px_rgb(80,181,253,0.1)]' style={{ 
                textShadow: '0px 1px 4px white, 0px 3px 0px rgb(85, 138, 187, 0.5)'
            }}>{children}</p>
        </header>
    )
}

