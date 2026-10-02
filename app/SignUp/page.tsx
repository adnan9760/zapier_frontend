"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useRouter } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ZapierSignup: React.FC = () => {
  const router = useRouter();
  const features: string[] = [
    "Integrate 8,000+ apps and 300+ AI tools without code",
    "Build AI-powered workflows in minutes, not weeks",
    "14-day trial of all premium features and apps",
  ];

  const brands: string[] = ["okta", "hp", "samsung", "lowe’s", "pepsico", "p&g"];
const[firstName,setfirstName] = useState("");
const[lastNmae,setlastName] = useState("");
const[email,setemail] = useState("");
const[password,setpassword] = useState("");

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault(); 
  try {
    console.log("inside handleSubmit");

    const response = await axios.post("http://localhost:3002/api/v1/user/register", {
      username: firstName ,
      email: email,
      password: password
    });

    console.log("res", response.data); 

    if (response.data?.success) {
      router.push("/Login");
    } else {
      console.log("Registration failed:", response.data);
    }

  } catch (error) {
    console.error("Error during registration:", error);
  }
}


  return (
    <div className="min-h-screen bg-[#fffdf9] flex flex-col justify-center px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            AI Automation starts and scales with Zapier
          </h1>

          <p className="text-gray-700 mb-8 text-lg">
            Orchestrate AI across your teams, tools, and processes. Turn ideas
            into automated action today, and power tomorrow’s business growth.
          </p>

          <ul className="space-y-4 mb-10">
            {features.map((text, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-800">
                <CheckCircleIcon className="h-6 w-6 text-green-600" />
                {text}
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-500 mb-4">
            Trusted by 3.4 million companies
          </p>

          <div className="flex flex-wrap gap-8 items-center">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="text-gray-400 font-semibold text-lg uppercase tracking-wide"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-8 w-full max-w-md mx-auto">
          {/* Google Sign Up */}
          <button className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition">
            <FcGoogle className="text-2xl bg-white rounded-full p-[2px]" />
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Signup Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-sm text-gray-600 font-medium"
              >
                * Work email
              </label>
              <input
                id="email"
                onChange={(e)=>{
                 setemail(e.target.value);
                }}
                type="email"
                placeholder="you@company.com"
                className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-sm text-gray-600 font-medium"
                >
                  * First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  onChange={(e)=>{
                    setfirstName(e.target.value)
                  }}
                  className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="text-sm text-gray-600 font-medium"
                >
                  * Last name
                </label>
                <input
                  id="lastName"
                  onChange={(e)=>{
                    setlastName(e.target.value)
                  }}
                  type="text"
                  className="w-full mt-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
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
          

            <p className="text-xs text-gray-500">
              By signing up, you agree to Zapier's{" "}
              <a href="#" className="text-blue-600 underline">
                terms of service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 underline">
                privacy policy
              </a>
              .
            </p>

           <button
  type="submit"
  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md transition-all"
>
  Get started for free
</button>


            <p className="text-center text-sm text-gray-600 mt-2">
              Already have an account?{" "}
              <a href="/Login" className="text-blue-600 underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ZapierSignup;
