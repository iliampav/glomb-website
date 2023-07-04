import styles from './styles.module.scss';

import BlueButton from '../atons/blueButton';
import { ReactNode } from 'react';

interface insideTopicsInterface {
    title: ReactNode | string, 
    text: ReactNode, 
    buttonText: string, 
    buttonLink: string, 
    image: string, 
    imageDescription: string,
    listText?: string[] | ReactNode[], 
    grayBoxText?: ReactNode | string, 
    invertImagePosition?: boolean
}

export default function InsideTopics(props: insideTopicsInterface) {

    const {title, text, buttonText, buttonLink, listText, grayBoxText, image, imageDescription, invertImagePosition = false} = props
    
    return (
        <section>
            <div className={`container ${styles.insideTopicsMainBox} ${invertImagePosition ? styles.invertImagePosition : '' }`}>
                <div className={styles.imageContainer}>
                    <img 
                        loading="lazy"
                        src={image} 
                        alt={imageDescription} 
                    />
                </div>
                <div className={styles.textBoxContainer}>
                    <h2>{title}</h2>
                    <div>{text}</div>
                    {
                        listText &&
                            <ul>
                                {
                                    listText.map((text: string | ReactNode) => {
                                        return <li key={Math.random()}><p>{text}</p></li>
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