import { User } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../../firebase/initFirebase";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userState) => {
      if (userState !== user) {
        setUser(userState);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  return user;
};