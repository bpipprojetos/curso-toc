import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  position?: "top" | "bottom";
  flip?: boolean;
}

export function SectionDivider({ className, position = "bottom", flip = false }: SectionDividerProps) {
  return (
    <div
      className={cn(
        "absolute left-0 w-full overflow-hidden leading-none z-10",
        position === "top" ? "top-0 -translate-y-[99%]" : "bottom-0 translate-y-[99%]",
        className
      )}
    >
      <svg
        className={cn(
          "relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]",
          flip ? "transform scale-x-[-1]" : ""
        )}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="fill-background"
        ></path>
      </svg>
    </div>
  );
}
