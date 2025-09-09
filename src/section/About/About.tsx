"use client";
import { Button } from '@/components/ui/button'
import React, { useMemo } from 'react'
import Image from "next/image";

import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation()

    const memoData = useMemo(() => [
        { id: 0, image: "", title: t('sections.about.card.chip'), description: t('sections.about.card.chip.desc') },
        { id: 1, image: "", title: t('sections.about.card.opportunity'), description: t('sections.about.card.opportunity.desc') },
        { id: 2, image: "", title: t('sections.about.card.growth'), description: t('sections.about.card.growth.desc') },
    ], [t])

    return (
        <section className='container mt-60'>
            <div className='text-center'>
                <span className='text-red font-medium text-lg leading-[110.00000000000001%]'>{t('sections.about.name')}</span>
                <h3 className='font-fact font-extrabold leading-[120%] text-[56px] mt-4'>{t('sections.about.title')}</h3>
            </div>
            <div className='mt-40 flex gap-6'>
                {memoData.map((item) => (
                    <div key={item.id} className='rounded-[20px] px-6 pt-6 pb-3 bg-main-light-gray'>
                        <div className='w-[336px] h-[260px] bg-gray-50 rounded-[20px]'>
                            {/* <Image
                                src={item.image}
                                alt={item.title}
                                layout="fill"
                                objectFit="contain"
                                priority /> */}
                        </div>
                        <h6 className='font-semibold leading-[140%] text-xl mt-4'>{item.title}</h6>
                        <p className='mt-2 text-gray text-xl leading-[140%]'>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About