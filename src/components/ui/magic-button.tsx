import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IMagicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon: JSX.Element;
}

const MagicButton: React.FC<IMagicButtonProps> = ({
  title,
  icon,
  className,
}) => {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-md border border-yellow-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none",
        className
      )}
    >
      <h2>{title}</h2>
      {icon}
    </button>
  );
};

export default MagicButton;
