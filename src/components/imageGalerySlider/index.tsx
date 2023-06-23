import styles from './styles.module.scss';
import Image from 'next/image'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from "swiper";

import { ReactNode } from 'react';

interface imageGalerySliderInterface {
    title: ReactNode | string;
    subTitle: ReactNode[] | string[] ;
}

export default function ImageGalerySlider(props: imageGalerySliderInterface) {

    const {title, subTitle} = props

    return (
        <section className={styles.imageGalerySliderSection}>
            <div className={`container ${styles.sliderContainer}`}>
                <h2>{title}</h2>
                <div>
                    {
                        subTitle.map((eachTitle: ReactNode | string) => {
                            return <h3>{eachTitle}</h3>
                        })
                    }
                </div>
                <Swiper
                    watchSlidesProgress={true} 
                    slidesPerView={3} 
                    className="mySwiper"
                    navigation={true}
                    centeredSlides={true}
                    spaceBetween={30}
                    modules={[Navigation]}
                >
                    <SwiperSlide>
                        <Image 
                            src={'/assets/images/aposentadoria/escritorio/glomOffice.jpg'}
                            width={500}
                            height={310}
                            alt=''
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image 
                            src={'/assets/images/aposentadoria/escritorio/glomOffice.jpg'}
                            width={500}
                            height={310}
                            alt=''
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image 
                            src={'/assets/images/aposentadoria/escritorio/glomOffice.jpg'}
                            width={500}
                            height={310}
                            alt=''
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image 
                            src={'/assets/images/aposentadoria/escritorio/glomOffice.jpg'}
                            width={500}
                            height={310}
                            alt=''
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image 
                            src={'/assets/images/aposentadoria/escritorio/glomOffice.jpg'}
                            width={500}
                            height={310}
                            alt=''
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image 
                            src={'/assets/images/aposentadoria/escritorio/glomOffice.jpg'}
                            width={500}
                            height={310}
                            alt=''
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image 
                            src={'/assets/images/aposentadoria/escritorio/glomOffice.jpg'}
                            width={500}
                            height={310}
                            alt=''
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}