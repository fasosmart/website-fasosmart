import Link from "next/link";
import { companyInfo } from "@/lib/constants";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#4491CE] text-white font-bold text-xl transition-transform group-hover:scale-105">
        FS
      </div>
      <div className="flex flex-col">
        <span className="font-display font-bold text-xl text-black leading-tight">
          {companyInfo.name}
        </span>
        <span className="text-xs text-gray-500 leading-tight hidden sm:block">
          {companyInfo.slogan}
        </span>
      </div>
    </Link>
  );
}

