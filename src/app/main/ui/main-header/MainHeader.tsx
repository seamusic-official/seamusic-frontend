'use client'

import styles from './MainHeader.module.scss';

export function MainHeader() {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.mainHeaderSearch}>
        <input
          className={styles.headerSearch}
          type='text'
          placeholder='Search'
        />
        <div className={styles.searchLogo} />
      </div>
      <div className={styles.mainHeaderNav}>
        <div className={styles.navBell} />
        <div className={styles.navAvatar}>
          <div className={styles.avatarName}>Sam</div>
          <div className={styles.avatarArrow} />
          <div className={styles.avatarFoto} />
        </div>
      </div>
    </div>
  )
}
