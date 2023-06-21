import Link from 'next/link';
import styles from './styles.module.scss';

interface buttonProps {
    buttonLink: string; 
    buttonText: string; 
}

export default function BlueButton(props: buttonProps) {

    const {buttonLink, buttonText} = props

    return (
        <Link href={buttonLink} className={styles.buttonContainer}>
            {buttonText}
        </Link>
    )
}