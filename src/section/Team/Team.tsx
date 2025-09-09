"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const Team = () => {
    const { t } = useTranslation()


    const memoData = useMemo(() => [
        { id: 0, image: "/images/team/jasurbek.webp", name: t('sections.team.card.jasurbek') },
        { id: 1, image: "/images/team/mirjalol.webp", name: t('sections.team.card.mirjalol') },
        { id: 2, image: "/images/team/abdulaziz.webp", name: t('sections.team.card.abdulaziz') },
        { id: 3, image: "/images/team/boburjon.webp", name: t('sections.team.card.boburbek') },
        { id: 4, image: "/images/team/umar.webp", name: t('sections.team.card.umar') },
        { id: 5, image: "/images/team/temur.webp", name: t('sections.team.card.temur') },
    ], [t])
    return (
        <section className='mt-40'>
            <div className='container text-center'>
                <span className='text-red font-medium text-lg leading-[110.00000000000001%]'>{t('sections.team.name')}</span>
                <h3 className='font-fact font-extrabold leading-[120%] text-[56px] mt-4'>{t('sections.team.title')}</h3>
            </div>

            <Carousel opts={{ dragFree: true, loop: true }} className="w-full max-w-sm">
                <CarouselContent className="-ml-1">
                    {memoData.map((item) => (
                        <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}

export default Team