import Image from 'next/image';
import navImgSrc from '@/shared/assets/main/Frame 30.png';
import s from './MainMenu.module.scss';
import { MAIN_MENU_ITEMS } from '@/shared/constants';
import { NavItem } from '@/shared/ui';

export function MainMenu() {
  return (
    <div className={s.mainMenu}>
      <div className={s.menuNav}>
        <div className={s.navImage}>
          <Image
            src={navImgSrc}
            alt=""
            role="presentation"
				  	className={s.imgTop}
          />
          <div className={s.navTitleWrapper}>
            <div className={s.navTitle}>Top release</div>
          </div>
        </div>
        <div className={s.navItems}>
          {MAIN_MENU_ITEMS.menu_main_items.map((el) => (
            <NavItem key={el.id} id={el.id} data={el.data} />
          ))}
        </div>
      </div>
      <div className={s.navItems}>
        {MAIN_MENU_ITEMS.menu_settings_items.map((el) => (
          <NavItem key={el.id} id={el.id} data={el.data} />
        ))}
      </div>
    </div>
  )
}
