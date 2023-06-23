import styles from './styles.module.scss';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactNode } from 'react';
import SwiperButtons from './swiperButtons';

interface imageGalerySliderInterface {
    title: ReactNode | string;
    subTitle: string[] ;
    carrouselImages: {
        imageUrl: string;
        imageDescription: string;
    }[];
    initialSlideNumber: number;
}

interface imageInterface {
        imageUrl: string;
        imageDescription: string;
    }[]

export default function ImageGalerySlider(props: imageGalerySliderInterface) {

    const {title, subTitle, carrouselImages, initialSlideNumber} = props

    const [screenSize, getDimension] = useState({
        dynamicWidth: 0,
        dynamicHeight: 0
      });

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }, [])

    useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
    }, [screenSize])
    
    return (
        <section className={styles.imageGalerySliderSection}>
            <div className={`container ${styles.sliderContainer}`}>
                <h2>{title}</h2>
                <div className={styles.subText}>
                    {
                        subTitle.map((eachTitle: ReactNode | string) => {
                            return <h3>{eachTitle}</h3>
                        })
                    }
                </div>
                <Swiper
                    slidesPerView={screenSize.dynamicWidth >= 768 ? 5 : 1} 
                    className="mySwiper"
                    centeredSlides={true}
                    spaceBetween={30}
                    initialSlide={initialSlideNumber}
                >
                    <SwiperButtons />
                    
                    {
                        carrouselImages.map((image: imageInterface) => {
                            return (
                            <SwiperSlide key={image.imageUrl} className={`${styles.changeActiveSlider} ${styles.nextOrPrevSlider}`}>
                                <Image 
                                    src={image.imageUrl}
                                    width={478}
                                    height={503}
                                    alt={image.imageDescription}
                                />
                            </SwiperSlide>
                            )
                        })
                    }
                    
                </Swiper>
            </div>
        </section>
    )
}