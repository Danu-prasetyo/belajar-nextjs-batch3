import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <form>
      <InputForm label="Username" name="username" type="text" placeholder="Masukkan username" />
      <InputForm label="Password" name="password" type="password" placeholder="Masukkan password" />
      <Button buttonClassname="bg-gradient-hover text-white w-full mt-4">Login</Button>
    </form>
  );
};

export default Login;
