import { getCurrentUser } from "@/services/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // validasi token, cek klo ga ada token balikin ke login
    if (token) {
      setUsername(getCurrentUser(token));
    } else {
      router.push("/login");
    }
  }, []);

  return username;
};
