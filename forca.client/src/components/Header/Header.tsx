import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/calendar" className={styles.logo}>FORCA PROD</Link>
    </header>
  )
}

export default Header