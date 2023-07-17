import { createContext } from "react";
import { ChangeEvent } from "react";

interface PosContextProps {
    data: string;
    updateData: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  export const PosContext = createContext<PosContextProps>({
    data: "1",
    updateData: () => {}
  });