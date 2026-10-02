import { ReactNode } from "react";

export const PrimaryBtn = ({
  children,
  onClick,
  size = "small",
}: {
  children: ReactNode;
  onClick: () => void;
  size?: "small" | "big";
}) => {
  const sizeClass =
    size === "big"
      ? "px-6 py-2 text-base"
      : "px-4 py-1 text-sm";

  return (
    <button
      onClick={onClick}
      className={`bg-white text-orange-600 font-semibold rounded-full ${sizeClass} hover:bg-orange-100 transition cursor-pointer`}
    >
      {children}
    </button>
  );
};
