'use client'

import Image from 'next/image';
import navImgSrc from '@/shared/assets/main/Frame 30.png';
import styles from './MainMenu.module.scss';
import { MAIN_MENU_ITEMS } from '@/constants/constants';
import { NavItem } from '../nav-item/NavItem';

export function MainMenu() {
  return (
    <div className={styles.mainMenu}>
      <div className={styles.menuNav}>
        <div className={styles.navImage}>
          <Image
            src={navImgSrc}
            alt=""
            role="presentation"
				  	className={styles.imgTop}
          />
          <div className={styles.navTitleWrapper}>
            <div className={styles.navTitle}>Top release</div>
          </div>
        </div>
        <div className={styles.navItems}>
          {MAIN_MENU_ITEMS.menu_main_items.map((el) => (
            <NavItem key={el.id} id={el.id} data={el.data} />
          ))}
        </div>
      </div>
      <div className={styles.navItems}>
        {MAIN_MENU_ITEMS.menu_settings_items.map((el) => (
          <NavItem key={el.id} id={el.id} data={el.data} />
        ))}
      </div>
    </div>
  )
}
