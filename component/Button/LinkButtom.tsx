import { ReactNode } from "react";

export const LinkButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="text-white font-medium hover:text-orange-100 transition duration-200 cursor-pointer"
    >
      {children}
    </button>
  );
};
