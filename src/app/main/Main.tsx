'use client'

import styles from './Main.module.scss';
import { MainHeader } from './ui/main-header/MainHeader';
import { MainLogo } from './ui/main-logo/MainLogo';
import { MainMenu } from './ui/main-menu/MainMenu';

export function Main() {
  return (
    <div className={styles.main}>
      <MainLogo />
      <MainHeader />
      <MainMenu />
      <div className={styles.mainContent}>
        <div className={styles.contentTop}>
          <div className={styles.contentTopLeft}>1</div>
          <div className={styles.contentTopRight}>2</div>
        </div>
        <div className={styles.content}>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
        </div>
      </div>
    </div>
  )
}
