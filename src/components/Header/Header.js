import React from 'react'

import Logo from '../../assets/images/Logo.svg'
import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <img src={Logo} className={styles.logo} alt="Bossjob" />
  </header>
)

export default Header
