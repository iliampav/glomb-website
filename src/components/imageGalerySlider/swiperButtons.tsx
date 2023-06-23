import styles from './styles.module.scss';
import React from 'react';
import { useSwiper } from 'swiper/react';
import SliderNext from '@/public/assets/svgs/sliderNext.svg';
import SliderPrev from '@/public/assets/svgs/sliderPrev.svg';

export default function SwiperButtons() {

    const swiper = useSwiper();
    
    return (
            <div className={styles.sliderButtons}>
                <button onClick={() => swiper.slidePrev()}>
                    <SliderPrev />
                </button>
                <button onClick={() => swiper.slideNext()}>
                    <SliderNext />
                </button>
            </div> 
    )
}