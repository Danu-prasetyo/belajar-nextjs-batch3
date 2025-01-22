import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <form>
      <InputForm label="Username" name="username" type="text" placeholder="Masukkan username" />
      <InputForm label="Email" name="email" type="email" placeholder="Masukkan email" />
      <InputForm label="Password" name="password" type="password" placeholder="Masukkan password" />
      <Button buttonClassname="bg-blue-500 hover:bg-blue-700 text-white w-full mt-4">Login</Button>
      <p className="text-sm text-center mt-2">
        Already have an account?{" "}
        <Link className="text-blue-500 hover:text-blue-700" href="/login">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
