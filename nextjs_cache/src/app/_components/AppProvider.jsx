"use client";

import { createContext } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  console.log("app provider");

  return (
    <AppContext.Provider
      value={{
        message: "Học nextjs không khó",
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
