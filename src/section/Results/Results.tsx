"use client"
import Image from 'next/image'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const Results = () => {
    const { t } = useTranslation()


    const memoData = useMemo(
        () => [
            { id: 0, icon: "/svg/users.svg", figures: "35 000+", text: t("sections.results.card.followers") },
            { id: 1, icon: "/svg/globe.svg", figures: "12 000+", text: t("sections.results.card.webViews") },
            { id: 2, icon: "/svg/eye.svg", figures: "3 mln+", text: t("sections.results.card.socialView") },
            { id: 3, icon: "/svg/handshake.svg", figures: "150+", text: t("sections.results.card.partners") },
            { id: 4, icon: "/svg/star.svg", figures: "350+", text: t("sections.results.card.discounts") },
            { id: 5, icon: "/svg/download.svg", figures: "1 100+", text: t("sections.results.card.appDownloads") },
        ],
        [t]
    );

    return (
        <section className='bg-main-light-gray py-30 mt-40'>
            <div className='container'>
                <div className='text-center'>
                    <span className='text-red font-medium text-lg leading-[110.00000000000001%]'>{t('sections.results.name')}</span>
                    <h3 className='font-fact font-extrabold leading-[120%] text-[56px] mt-4 w-[95%] mx-auto text-center'>{t('sections.results.title')}</h3>
                </div>

                <div className='grid grid-cols-3 gap-6 mt-20'>
                    {memoData.map(item => (
                        <div key={item.id} className='p-10 flex flex-col items-center bg-white rounded-[20px]'>
                            <div className='rounded-full bg-red w-15 h-15 flex items-center justify-center'><img src={item.icon} alt={item.text} /></div>
                            <span className='font-fact font-medium text-[56px] mt-10 leading-[100%]'>{item.figures}</span>
                            <p className='text-xl mt-4 leading-[140%] text-gray'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Results