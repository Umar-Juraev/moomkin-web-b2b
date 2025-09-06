"use client";

import {
  Pagination,
  ProductCard,
  ProductDialogContent,
  SkeletonCard,
} from "@/components/shared";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useResponsiveDialog } from "@/hooks/useResponsiveDialog";
import { buildApiParams } from "@/utils/data";
import { useParams, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { Inbox } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const locale = params?.locale || "uz";
  const { products } = params as { locale: string; products: string };
  const { t, i18n } = useTranslation();


  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const limit = 8;


  const [responsiveDialog, showResponsiveDialog] = useResponsiveDialog();

  const handleProductClick = (discountId: number) => {
    showResponsiveDialog({
      content: (onClose) => (
        <ProductDialogContent discountId={discountId} onClose={onClose} />
      ),
    });
  };

  return (
    <>
      <div className="container ">
        <Breadcrumb className=" mt-6 mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${locale}`}>{t('pages.home')}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage> {t(`titles.${products}`)}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className=" font-pretendard font-extrabold text-[56px] leading-[64px] tracking-[-0.5%] md:text-5xl mb-6">
          {t(`titles.${products}`)}
        </h1>
      </div>


      {responsiveDialog}
    </>
  );
}
