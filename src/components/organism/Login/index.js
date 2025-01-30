import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import { login } from "@/services/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [errorLogin, setErrorLogin] = useState("");
  const router = useRouter();
  // Event handler untuk simulasi login
  async function handleLogin(event) {
    // event.preventDefault(); : buat  mencegah halaman refresh
    event.preventDefault();

    const payload = {
      username: event.target.username.value, // johnd
      password: event.target.password.value, // m38rmF$
    };

    try {
      const res = await login(payload);
      console.log(res);

      // validasi status
      if (res.status) {
        localStorage.setItem("token", res.token);
        router.push("/products");
      } else {
        console.log("login error", res.error.response.data);
        setErrorLogin(res.error.response.data);
      }
    } catch (error) {
      console.log("Login failed : ", error);
      setErrorLogin(error.response);
    }
  }

  return (
    // onSubmit : event handler yang menangani aksi form ketika di submit(button = submit)
    <form onSubmit={handleLogin}>
      <InputForm label="Username" name="username" type="text" placeholder="Masukkan username" />
      <InputForm label="Password" name="password" type="password" placeholder="Masukkan password" />
      <Button
        // onClick={handleLogin} // onClick : event handler buat menangani aksi ketika button diklik
        buttonClassname="bg-gradient-hover text-white w-full mt-4"
        type="submit"
      >
        Login
      </Button>
      {errorLogin && <p className="mt-4 text-center text-sm text-red-500">{errorLogin}</p>}
    </form>
  );
};

export default Login;
