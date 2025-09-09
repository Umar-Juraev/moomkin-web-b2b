"use client";
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from "next/image";

import { useTranslation } from "react-i18next";

const Banner = () => {
    const { t } = useTranslation()
    return (
        <section className='mt-30 w-full'>
            <div className='container grid grid-cols-2 gap-10 '>
                <div>
                    <h1 className='font-fact font-extrabold text-7xl leading-[110.00000000000001%] tracking-[0]'>{t('sections.banner.title')}</h1>
                    <p className='mt-6 text-xl leading-[140%] w-[85%] text-gray'>{t('sections.banner.description')}</p>
                    <div className='flex gap-4 mt-10'>
                        <Button variant={'primary'}>{t('sections.banner.button.partner')}</Button>
                        <Button variant={'secondary'}>{t('sections.banner.button.platform')}</Button>
                    </div>
                </div>
                <div className='absolute right-0 !w-[667px] !h-[435px]'>
                    <Image src="/images/banner.webp" alt="Moomkin app"
                        layout="fill"
                        objectFit="contain" 
                        priority
                         />
                </div>
            </div>
        </section>
    )
}

export default Banner