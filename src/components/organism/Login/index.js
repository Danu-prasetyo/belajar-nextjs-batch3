import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import React from "react";

const Login = () => {
  // Event handler untuk simulasi login
  function handleLogin(event) {
    // event.preventDefault(); : buat  mencegah halaman refresh
    event.preventDefault();

    // simpen data dari input ke localStorage
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);

    // redirect ke halaman produk
    window.location.href = "/products";
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
    </form>
  );
};

export default Login;
