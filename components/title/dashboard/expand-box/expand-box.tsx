'use client'

import React, { useState } from "react";

export const ExpandBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [expand, setexpand] = useState(false)

    return (
        <div className="space-y-2">
            <div className={["w-full h-full max-h-56 sm:max-h-60 2xl:max-h-80 rounded-xl relative text-white space-y-4 px-4", expand ? "overflow-y-auto" : "overflow-y-hidden"].join(" ")}>
                {children}
            </div>
            <div className="flex justify-center">
                <button type="button" className="text-sm text-green-500 hover:underline" onClick={() => { setexpand(!expand) }}>{expand ? 'View less' : 'View more'}</button>
            </div>
        </div>
    )
}

export default ExpandBox