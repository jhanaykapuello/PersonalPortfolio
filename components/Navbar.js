import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">
            {/* <a legacyBehavior className={styles.navLink}>Home</a> */}
            <h4 className={styles.navLink}> Home</h4>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Blogs">
          <h4 className={styles.navLink}> Projects</h4>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Privacy">
          <h4 className={styles.navLink}> Privacy</h4>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Contact">
          <h4 className={styles.navLink}> Contact Me</h4>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/About">
            {/* <a className={styles.navLink}>About Us</a> */}
            <h4 className={styles.navLink}> About Me</h4>
          </Link>
        </li>
        
      </ul>
    </nav>
  )
}