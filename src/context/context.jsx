import { createContext, useState } from "react";

export const   GlobalContext = createContext(null);
export default function GlobalState({ children }) {
    const [id , setId] = useState(null)
    return (
        <GlobalContext.Provider
          value={{
            id,setId
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
}

