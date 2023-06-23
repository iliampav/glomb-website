import styles from './styles.module.scss';

import OrangeForm from '@/public/assets/svgs/firstForm.svg';
import GreenForm from '@/public/assets/svgs/secondForm.svg';
import BlueForm from '@/public/assets/svgs/thirdForm.svg';

interface formsTitleInterface {
    firstTitle: string, 
    firstSubTitle: string, 
    secondTitle: string, 
    secondSubTitle: string, 
    thirdTitle: string, 
    thirdSubTitle: string
}

export default function FormsTopics(props: formsTitleInterface) {

    const {firstTitle, firstSubTitle, secondTitle, secondSubTitle, thirdTitle, thirdSubTitle} = props

    return (
        <section className={styles.formsTopicsSection}>
            <div className={`container ${styles.formsTopics}`}>
                <div className={`${styles.singleFormBox} ${styles.flexStart}`}>
                    <OrangeForm />
                    <div>
                        <h3>{firstTitle}</h3>
                        <p>{firstSubTitle}</p>
                    </div>
                </div>
                <div className={`${styles.singleFormBox} ${styles.center}`}>
                    <GreenForm />
                    <div>
                        <h3>{secondTitle}</h3>
                        <p>{secondSubTitle}</p>
                    </div>
                </div>
                <div className={`${styles.singleFormBox} ${styles.flexEnd}`}>
                    <BlueForm />
                    <div>
                        <h3>{thirdTitle}</h3>
                        <p>{thirdSubTitle}</p>
                    </div>
                </div>
            </div>
            <div className={styles.backgroundPlay}></div>
        </section>
    )
}