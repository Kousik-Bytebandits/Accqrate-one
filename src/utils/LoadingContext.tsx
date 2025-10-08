"use client";
import React, { useEffect, useState, useMemo, createContext } from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => { },
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  const value = useMemo(() => ({ loading, setLoading }), [loading]);
  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
}
