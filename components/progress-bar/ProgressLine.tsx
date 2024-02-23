import React, { useEffect, useState } from "react";
import { MdSettingsApplications } from "react-icons/md";
import "./ProgressLine.css";

interface VisualPart {
  color?: string;
}

interface ProgressLineProps {
  label: string;
  backgroundColor?: string;
  remainingBalance?: number;
  totalBalance?: number;
  children?: React.ReactNode;
  visualParts?: VisualPart[];
}

const ProgressLine: React.FC<ProgressLineProps> = ({
  label,
  backgroundColor = "#282C35",
  remainingBalance = 0,
  totalBalance = 0,
  children,
  visualParts = [
    {
      color: "#1FCB4F",
    },
  ],
}) => {
  const calculatePercentage = (): string => {
    if (totalBalance === 0) {
      return "0%";
    }

    const percentage = (remainingBalance / totalBalance) * 100; // Calculating percentage dynamically
    return `${percentage}%`;
  };

  const [widths, setWidths] = useState<string[]>(
    visualParts.map(() => calculatePercentage())
  );

  useEffect(() => {
    const calculateWidths = () => {
      setWidths(visualParts.map(() => calculatePercentage()));
    };

    // Delay the initial calculation and rendering of widths
    const timeoutId = setTimeout(calculateWidths, 500);
    console.log(calculateWidths)
    // Clear the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [visualParts, remainingBalance, totalBalance]);

  return (
    <>
      <div className="grid grid-cols-5 gap-3 mb-4">
        <div className="col-span-1">
          <div className="flex-shrink-0 h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center rounded-xl bg-gray-900 shadow-gray-900 /50 dark:bg-accent dark:shadow-accent/50">
            {children}
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex justify-between">
            <div className="progressLabel">{label}</div>
            <div>
              <p className="text-sm text-gray-500">
                ${remainingBalance}
                <span className="text-gray-800">/${totalBalance}</span>
              </p>
            </div>
          </div>
          <div
            className="progressVisualFull"
            style={{
              backgroundColor,
            }}
          >
            {visualParts.map((item, index) => (
              <div
                key={index}
                style={{
                  width: widths[index],
                  backgroundColor: item.color,
                }}
                className="progressVisualPart"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressLine;
