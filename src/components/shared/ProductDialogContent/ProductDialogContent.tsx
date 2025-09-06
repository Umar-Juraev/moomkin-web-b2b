"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { formatDateRange } from "@/utils/date";
import Image from "next/image";
import calendarIcon from "@/assets/icons/calendar.svg";
import locationIcon from "@/assets/icons/location.svg";
import telegramIcon from "@/assets/icons/telegram.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import phoneIcon from "@/assets/icons/phone.svg";
// import shareIcon from "@/assets/icons/share.svg";
import React, { FC, useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import YMap from "../YMap/YMap";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CloseIcon, FavoriteDialogIcon, ShareIcon } from "@/assets/icons";
import { ContactTypeIdEnum } from "@/constants/enums";
import { X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import SkeletonDialog from "../SkeletonDialog/SkeletonDialog";
import { useTranslation } from "react-i18next";
import ReadMore from "../Readmore/Readmore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import CarouselIndicators from "../CarouselIndicators/CarouselIndicators";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

interface Props {
  onClose: () => void;
  discountId: number;
}

const ProductDialogContent: FC<Props> = ({ onClose, discountId }) => {
  const { t,i18n } = useTranslation();
  const [api, setApi] = React.useState<CarouselApi>()
  const isMobile = useMediaQuery("(max-width: 768px)");
  const hasSeenPosted = useRef(false);


  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          text: "This is a cool thing to share.",
          url: window.location.href,
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };
  const handleNavigate = (lat: number, lng: number) => {
    const url = `https://yandex.com/maps/?rtext=~${lat},${lng}`;
    window.open(url, "_blank");
  };




  if (false) return <SkeletonDialog />;


  return (
    <div className="text-text-dark border-none shadow-none p-0 m-0 md:overflow-y-auto md:h-max">
      clear
    </div>
  );
};

export default ProductDialogContent;
