"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

const Partners = () => {
    const { t } = useTranslation()
    return (
        <section className='mt-40'>
            <div className='container'>
                <div className='text-center'>
                    <span className='text-red font-medium text-lg leading-[110.00000000000001%]'>{t('sections.about.name')}</span>
                    <h3 className='font-extrabold leading-[120%] text-[56px] mt-4'>{t('sections.about.title')}</h3>
                </div>
            </div>
        </section>
    )
}

export default Partners