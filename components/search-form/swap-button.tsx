import React, { useState } from 'react';
import { twMerge } from "tailwind-merge"
import { ArrowSwapHorizontal } from "iconsax-react"
import Styles from './visa-search-form.module.css'

interface TourAppState {
  fromCity: string;
  destinationCity: string;
}

export const SwapButton = () => {
  const [tourState, setTourState] = useState<TourAppState>({
    fromCity: '',
    destinationCity: '',
  });

  const handleSwapCities = () => {
    setTourState((prevState) => ({
      fromCity: prevState.destinationCity,
      destinationCity: prevState.fromCity,
    }));
  };

  return (
    
        <button type="button" className={twMerge(
            "absolute z-[1]",
            "-right-4 md:-right-[22px]",
        )}
        onClick={handleSwapCities}>
            <div className={twMerge("bg-white rounded-full h-8 w-8 grid place-items-center border relative") + ` ${Styles.swapBtn}`}>
                <div className={twMerge("bg-gray-200 rounded-full p-1 hover:bg-gray-100")}>
                    <ArrowSwapHorizontal size="16" color="currentColor" />
                </div>
            </div>
        </button>
  );
};
