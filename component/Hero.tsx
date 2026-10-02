"use client";
import { useRouter } from "next/navigation";
import { PrimaryBtn } from "./Button/PrimaryButtom";

export const HeroSection = () => {
  const router = useRouter();

  return (
    <section className=" bg-[#fffaf5] flex flex-col items-center justify-center py-20 text-center px-6">
      <div className="flex items-center gap-2 text-sm text-orange-600 font-semibold mb-4">
        <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
        THE MOST CONNECTED AI ORCHESTRATION PLATFORM
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-5xl leading-tight">
        Go from concept to enterprise-ready
        <br /> automation in seconds
      </h1>
      <div className="flex flex-wrap gap-3 justify-center mt-6">
        {["Secure", "Observable", "Compliant"].map((item) => (
          <span
            key={item}
            className="border border-gray-300 rounded-md px-4 py-1 text-gray-700 text-sm font-medium bg-white"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-10 w-full max-w-3xl bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch">
          <textarea
            placeholder="Describe your workflows..."
            className="flex-1 p-4 resize-none outline-none text-gray-700 placeholder-gray-500 min-h-[120px]"
          ></textarea>
          <div className="flex items-end justify-end md:justify-center p-4">
            <PrimaryBtn
              onClick={() => router.push("/SignUp")}
              size="big"
            >
              Sign up to build →
            </PrimaryBtn>
          </div>
        </div>
      </div>

      {/* Workflow suggestion buttons */}
      <div className="flex flex-wrap gap-3 justify-center mt-8 text-sm">
        {[
          "Enrich and route new leads",
          "Respond to IT tickets",
          "Automate employee onboarding",
          "See more",
        ].map((text) => (
          <button
            key={text}
            className="border border-gray-300 rounded-full px-5 py-2 bg-white hover:bg-gray-50 transition"
          >
            {text}
          </button>
        ))}
      </div>
    </section>
  );
};
