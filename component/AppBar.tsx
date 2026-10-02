"use client";
import { useRouter } from "next/navigation";
import { LinkButton } from "./Button/LinkButtom";
import { PrimaryBtn } from "./Button/PrimaryButtom";
import { useState } from "react";

export const AppBar = ({login}:{
    login:any
}) => {
  const router = useRouter();
  

  return (
    <div className="w-stretch flex justify-between items-center px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 text-white shadow-md">
      <div
        className="text-2xl font-extrabold tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => router.push("/")}
      >
        _Zapier
      </div>

      <div className="flex gap-6 items-center">
        <LinkButton
          onClick={() => router.push("/Contact-Saller")}
        >
          Contact Seller
        </LinkButton>
{
    login ? (
          <LinkButton
          onClick={() => router.push("/SignUp")}
        >
          Sign Up
        </LinkButton>
    ) : (  <PrimaryBtn
          onClick={() => router.push("/Login")}
          size="small"
        >
          Sign In
        </PrimaryBtn>)
}
      

      
      </div>
    </div>
  );
};
