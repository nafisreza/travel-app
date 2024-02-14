'use client'

import { useState } from "react";

export const wayArray: string[] = ["One Way", "Round Trip", "Multi City"]

export type CheckButtonProps = {
    id: string;
    active: boolean;
    text: string;
    onChange: () => void;
}

const Label: React.FC<CheckButtonProps> = ({ id, active, text, onChange }) => {
    return (
        <label htmlFor={id} className={[
            "font-medium rounded-lg text-sm px-2 md:px-4 text-center inline-flex items-center gap-1 md:gap-2 h-9 md:h-11 whitespace-nowrap",
            active ? "bg-green-500 text-white" : "text-green-500 bg-green-500/10 hover:bg-green-500/20"
        ].join(" ")}>
            <input type="radio" name={id} id={id} checked={active} onChange={onChange} className={[
                "w-4 h-4 appearance-none",
                active ? "bg-green-500 rounded-full border-4 border-white" : "border border-green-500 bg-white rounded-full"
            ].join(" ")} />
            {text}
        </label>
    )
}

const CheckButton: React.FC<{ handleWay: (way: string) => void }> = ({ handleWay }) => {
    const [currentWay, setcurrentWay] = useState<string>(wayArray[0])

    return (
        <div className="flex flex-wrap gap-2 md:gap-4" title="tab">
            {wayArray.map((item, index) =>
                <Label key={index} text={item} active={item === currentWay} id={item.replaceAll(" ", "")} onChange={() => {
                    setcurrentWay(item);
                    handleWay(item);
                }} />
            )}
        </div>
    )
}

export default CheckButton;