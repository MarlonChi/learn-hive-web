"use client";

import { ReactNode } from "react";
import StoreProvider from "@/state/redux";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return <StoreProvider>{children}</StoreProvider>;
};
