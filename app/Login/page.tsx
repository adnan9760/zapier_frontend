"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppBar } from "@/component/AppBar";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage: FC = () => {
  const router = useRouter();
  const[password,setpassword] = useState("");
  const[username,setusername] = useState("");
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault(); 
  try {
    console.log("inside handleSubmit");

    const response = await axios.post("http://localhost:3002/api/v1/user/login", {

      email: username,
      password: password
    });

    console.log("res", response.data); 

    if (response.data?.success) {
           const token =response.data.token;
           localStorage.setItem("token",token);
           router.push("/Dashboard");
           
    } else {
      console.log("Registration failed:", response.data);
    }

  } catch (error) {
    console.error("Error during registration:", error);
  }
}``
  return (
    <div>
    <div className="flex min-h-screen bg-[#FFFCF9] text-gray-900">
      <div className="flex flex-col justify-center flex-1 px-16">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Automate across your teams
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-xl">
          Zapier Enterprise empowers everyone in your business to securely
          automate their work in minutes, not months—no coding required.
        </p>
        <button className="bg-[#6D5DFB] text-white px-6 py-3 rounded-md font-semibold text-lg shadow-md hover:bg-[#5a4ae0] transition-all duration-200 w-fit">
          Explore Zapier Enterprise
        </button>
      </div>

      <div className="flex items-center justify-center flex-1">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg p-10 w-[400px] text-center">
          <h2 className="text-2xl font-semibold mb-6">Log in to your account</h2>

          <p className="text-gray-600 mb-4">Welcome back!</p>

          <button className="flex items-center justify-center w-full bg-[#4285F4] text-white py-3 rounded-md font-medium hover:bg-[#357ae8] transition">
            <Image
              src="/google-icon.svg"
              alt="Google"
              width={24}
              height={24}
              className="mr-2"
            />
            Continue with Google
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Or{" "}
            {/* <Link href="/Login" className="text-blue-600 hover:underline">
              use your email address to log in
            </Link> */}
            .
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
           <div className="text-start">
             <label
                htmlFor="username"
                className="text-sm text-gray-600 font-medium"
              >
                * Username
              </label>
              <input
                id="username"
                onChange={(e)=>{
                  setusername(e.target.value)
                }}
                type="username"
                placeholder="first+lastname"
                className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
           <div className="text-start">
             <label
                htmlFor="password"
                className="text-sm text-gray-600 font-medium"
              >
                * Password
              </label>
              <input
                id="password"
                onChange={(e)=>{
                  setpassword(e.target.value)
                }}
                type="password"
                placeholder="khan123#"
                className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
             
              className="w-full bg-orange-600 mt-2 hover:bg-orange-700 text-white font-semibold py-2 rounded-md transition-all"
            >
              Continue
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-6">
            Don’t have a Zapier account yet?{" "}
            <Link href="/SignUp" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
