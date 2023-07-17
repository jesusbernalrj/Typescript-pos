import { useState } from "react";
import { PosContext } from "./PosContext";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PosProvider = ({ children }: Props) => {
  const [data, setData] = useState("1");

  const updateData = (newData: string) => {
    setData(newData);
  };

  return (
    <PosContext.Provider value={{ data, updateData }}>
      {children}
    </PosContext.Provider>
  );
};


