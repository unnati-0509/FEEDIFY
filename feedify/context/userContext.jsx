import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/profile");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        // Optionally, handle the error here (e.g., set an error state)
      }
    };

    if (!user) {
      fetchUserProfile();
    }
  }, []); // Empty dependency array

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
