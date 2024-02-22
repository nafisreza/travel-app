import React, { useEffect, useState } from "react";
import "./progressLine.css";

interface VisualPart {
  percentage: string;
  color: string;
}

interface ProgressLineProps {
  label: string;
  totalBalance: string;
  remainingBalance: string;
  backgroundColor?: string;
  visualParts?: VisualPart[];
}

const ProgressLine: React.FC<ProgressLineProps> = ({
  label,
  backgroundColor = "#e5e5e5",
  visualParts = [
    {
      percentage: "0%",
      color: "white"
    }
  ]
}) => {
  const [widths, setWidths] = useState<string[]>(
    visualParts.map(() => {
      return "0%";
    })
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map((item) => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <>
      <div className="flex justify-between">
      <p className="progressLabel">{label}</p>
      <p className="text-gray-500"><span className="">${}</span>/$14000</p>
      </div>
      <div
        className="progressVisualFull"
        style={{
          backgroundColor
        }}
      >
        {visualParts.map((item, index) => (
          <div
            key={index}
            style={{
              width: widths[index],
              backgroundColor: item.color
            }}
            className="progressVisualPart"
          />
        ))}
      </div>
    </>
  );
};

export default ProgressLine;
