import { createContext, useState, useEffect, ReactNode } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

interface AuthContextType {
  currentUser: User | null;
  logout: () => Promise<void>;
  token: string | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      user?.getIdToken().then((token) => setToken(token));
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const logout = async () => {
    await signOut(auth);
    setCurrentUser(null);
  };
  const value = {
    currentUser,
    logout,
    token,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
