import styles from './styles.module.scss';
import Image from 'next/image'

import BlueButton from '../atons/blueButton';
import { ReactNode } from 'react';

interface insideTopicsInterface {
    title: ReactNode | string, 
    text: ReactNode | string, 
    buttonText: string, 
    buttonLink: string, 
    image: string, 
    imageDescription: string,
    listText?: string[], 
    grayBoxText?: ReactNode | string, 
    invertImagePosition?: boolean
}

export default function InsideTopics(props: insideTopicsInterface) {

    const {title, text, buttonText, buttonLink, listText, grayBoxText, image, imageDescription, invertImagePosition = false} = props
    
    return (
        <section>
            <div className={`container ${styles.insideTopicsMainBox} ${invertImagePosition ? styles.invertImagePosition : '' }`}>
                <div className={styles.imageContainer}>
                    <Image 
                        src={image} 
                        alt={imageDescription} 
                        height={315}
                        width={560}
                    />
                </div>
                <div className={styles.textBoxContainer}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    {
                        listText &&
                            <ul>
                                {
                                    listText.map((text: string) => {
                                        return <li key={text}><p>{text}</p></li>
                                    })
                                }
                            </ul>
                    }
                    {
                        grayBoxText &&
                        <div className={styles.grayBox}>
                            <p>{grayBoxText}</p>
                        </div>
                    }
                    <BlueButton buttonLink={buttonLink} buttonText={buttonText} />
                </div>
            </div>
        </section>
    )
}