import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image'

import BlueCheck from '@/public/assets/svgs/blueCheck.svg';
import headerPerson from '@/public/assets/images/aposentadoria/headerPerson.png'
import BlueButton from '../blueButton';

interface staticBannerInterface {
    title: string; 
    subTitle: string; 
    buttonText: string; 
    buttonLink: string; 
    advantages: string[]; 
}

export default function StaticBanner(props: staticBannerInterface) {

    const {title, subTitle, buttonText, buttonLink, advantages} = props

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
                    <div>
                        {
                            advantages.map((advantage: string) => {
                                return <div><BlueCheck />{advantage}</div>
                            })
                        }
                    </div>
                </div>
                <div className={styles.imageBox}>
                    <Image
                        src={headerPerson}
                        alt="Mais de 20000 clientes com mais de 500 avaliações e nota 4.8 estrelas"
                        priority={true}
                    />
                </div>
            </div>
        </section>
    )
}