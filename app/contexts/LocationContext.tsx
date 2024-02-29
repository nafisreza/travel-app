'use client'

import { createContext, useContext, ReactNode, useState } from 'react';

export type DummyDataType = { countryCode: string; country: string; city: string };

type LocationContextType = {
  visaCountry: DummyDataType;
  nationality: DummyDataType;
  setVisaCountry: (location: DummyDataType) => void;
  setNationality: (location: DummyDataType) => void;
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [visaCountry, setVisaCountry] = useState<DummyDataType>({ countryCode: '', country: '', city: '' });
  const [nationality, setNationality] = useState<DummyDataType>({ countryCode: '', country: '', city: '' });

  return (
    <LocationContext.Provider value={{ visaCountry, nationality, setVisaCountry, setNationality }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
