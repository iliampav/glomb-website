import styles from './styles.module.scss';
import Image from 'next/image'

import BlueCheck from '@/public/assets/svgs/blueCheck.svg';
import BlueButton from '../atons/blueButton';
import { ReactNode } from 'react';

interface staticBannerInterface {
    title: string; 
    subTitle: ReactNode; 
    buttonText: string; 
    buttonLink: string; 
    advantages: string[]; 
    headerDesktop: string;
    headerMobile: string;
}

export default function StaticBanner(props: staticBannerInterface) {

    const {title, subTitle, buttonText, buttonLink, advantages, headerDesktop, headerMobile} = props

    return (
        <section className={styles.staticbannerSection}>
            <div className={`container ${styles.bannerContainer}`}>
                <div className={styles.textBox}>
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                    <BlueButton 
                        buttonLink={buttonLink}
                        buttonText={buttonText}
                    />
                    <div className={styles.checkedContainer}>
                        {
                            advantages.map((advantage: string) => {
                                return <p key={advantage}><BlueCheck />{advantage}</p>
                            })
                        }
                    </div>
                </div>
                <div className={styles.imageBox}>
                    
                    <Image
                        className={'apearMobile'}
                        src={headerDesktop}
                        width={596}
                        height={652}
                        alt="Mais de 20000 clientes com mais de 500 avaliações e nota 4.8 estrelas"
                        priority={true}
                    />

                    <Image
                        className={'apearDesktop'}
                        src={headerMobile}
                        width={375}
                        height={720}
                        alt="Mais de 20000 clientes com mais de 500 avaliações e nota 4.8 estrelas"
                        priority={true}
                    />

                </div>
            </div>
        </section>
    )
}