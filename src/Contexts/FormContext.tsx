import { createContext, useContext, useState } from "react";

type FormContextProviderProps = {
  children: React.ReactNode;
};

type FormContext = {
  providedUrl: string;
  setProvidedUrl: React.Dispatch<React.SetStateAction<string>>;
};

export const FormContext = createContext<FormContext | null>(null);

export default function FormContextProvider({
  children,
}: FormContextProviderProps) {
  const [providedUrl, setProvidedUrl] = useState("");

  return (
    <FormContext.Provider
      value={{
        providedUrl,
        setProvidedUrl,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within FormContextProvider");
  }

  return context;
}
