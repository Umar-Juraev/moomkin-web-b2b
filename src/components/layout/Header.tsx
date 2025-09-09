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
    <nav className="container flex justify-between items-center bg-white h-20 md:h-auto md:block md:px-4">

      <Link href={`/${locale}`}>
        <Image src={logoIcon} alt="logo" />
      </Link>

      <ul className="flex items-center gap-10.5 text-base font-medium">
        <li>
          <Link href="#aboutProject" scroll={true}>
            {t("header.aboutProject")}
          </Link>
        </li>
        <li>
          <Link href="#partners" scroll={true}>
            {t("header.partners")}
          </Link>
        </li>
        <li>
          <Link href="#results" scroll={true}>
            {t("header.results")}
          </Link>
        </li>
        <li>
          <Link href="#team" scroll={true}>
            {t("header.team")}
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-3 md:hidden">
        <LanguageSwitcher
          onlyIcon
          className="w-12 !h-12 bg-main-light-gray flex items-center justify-center rounded-full"
        />
      </div>
    </nav>
  );
}
