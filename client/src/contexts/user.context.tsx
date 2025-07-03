import { type ReactNode, createContext, useState } from "react";
import type { Users } from "../types/vite-env";

interface UserContextType {
  user: Users | null;
  setUser: React.Dispatch<React.SetStateAction<Users | null>>;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Users | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
