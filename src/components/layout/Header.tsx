"use client";
import React from "react";
import Image from "next/image";
import logoIcon from "../../assets/icons/Logo.svg";
import { LanguageSwitcher } from "../shared";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

export default function Header() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = params?.locale || "uz";

  return (
    <div className="max-w-[1440px] mx-auto flex justify-between align-center bg-white px-10 h-20 md:h-auto md:block md:px-4">
      <div
        className={cn(
          "flex items-center gap-9 w-full md:justify-between md:py-1"
        )}
      >
        <Link href={`/${locale}`}>
          <Image src={logoIcon} alt="logo" />
        </Link>

      </div>
      <div className="flex items-center gap-3 md:hidden">
        <LanguageSwitcher
          onlyIcon
          className="w-12 !h-12 bg-main-light-gray flex items-center justify-center rounded-full"
        />
      </div>
    </div>
  );
}
