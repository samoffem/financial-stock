import { ReactElement } from "react";
import styles from './Layout.module.scss'
import Header from "@/components/Header/Header";


export default function getLayout(page: ReactElement){
    
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles['main']}>
                <div className={styles['main-content']}>
                    {page}
                </div>
                <aside className={styles['news-feed']}>

                </aside>
            </main>
        </div>
    )

}