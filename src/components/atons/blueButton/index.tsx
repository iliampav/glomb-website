import Link from 'next/link';
import styles from './styles.module.scss';

interface buttonProps {
    buttonLink: string; 
    buttonText: string; 
    isFloating?: boolean
}

export default function BlueButton(props: buttonProps) {

    const {isFloating = false} = props

    const {buttonLink, buttonText} = props

    return (
        <div className={`${isFloating ? styles.floatingButton : ''}`}>
            <Link href={buttonLink} className={`${styles.buttonContainer}`}>
                {buttonText}
            </Link>
        </div>
    )
}