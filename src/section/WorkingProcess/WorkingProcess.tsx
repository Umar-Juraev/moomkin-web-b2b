"use client";
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from "next/image";

import { useTranslation } from "react-i18next";

const WorkingProcess = () => {
    const { t } = useTranslation()

    return (
        <section className='container mt-40 grid grid-cols-[auto_454px] gap-24'>
            <div>
                <span className='text-red font-medium text-lg leading-[110.00000000000001%]'>{t('sections.workingProcess.name')}</span>
                <h4 className='font-fact font-extrabold leading-[120%] text-[42px] mt-4 w-[95%]'>{t('sections.workingProcess.title')}</h4>
                <p className='text-xl mt-4 leading-[140%] text-gray'>{t('sections.workingProcess.description')}</p>
                <Button className='mt-10' variant={'primary'}>{t('sections.banner.button.partner')}</Button>
            </div>
            <div className='h-[324px] bg-main-light-gray rounded-[20px]'>
                {/* <Image
                    src={''}
                    alt='a'
                    layout="fill"
                    objectFit="contain"
                    priority /> */}
            </div>
        </section>
    )
}

export default WorkingProcess