import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "header" | "footer";
  showText?: boolean;
  showSlogan?: boolean;
}

export function Logo({
  variant = "header",
  showText = true,
  showSlogan = true,
}: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 group",
        isFooter && "gap-3"
      )}
    >
      <div
        className={cn(
          "relative transition-transform group-hover:scale-105 flex-shrink-0",
          isFooter ? "w-14 h-14" : "w-12 h-12"
        )}
      >
        <Image
          src="/images/logos/FS_Logo_final.svg"
          alt={`${companyInfo.name} Logo`}
          width={isFooter ? 56 : 48}
          height={isFooter ? 56 : 48}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-display font-bold leading-tight",
              isFooter
                ? "text-xl text-white"
                : "text-xl text-black"
            )}
          >
            {companyInfo.name}
          </span>
          {showSlogan && (
            <span
              className={cn(
                "leading-tight",
                isFooter
                  ? "text-xs text-gray-400"
                  : "text-xs text-gray-500 hidden sm:block"
              )}
            >
              {companyInfo.slogan}
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

