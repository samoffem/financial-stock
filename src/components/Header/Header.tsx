import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles['wrapper']}>
        <div className={styles['inner-wrap']}>
            <h2>FSTOCK</h2>
            <div>
                Dashboard
            </div>
        </div>
    </div>
  )
}

export default Header