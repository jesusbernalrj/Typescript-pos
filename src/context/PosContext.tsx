import { createContext } from "react";

interface PosContextProps {
    data: string;
    updateData: (newData: string) => void;
  }
  export const PosContext = createContext<PosContextProps>({
    data: "1",
    updateData: () => {}
  });