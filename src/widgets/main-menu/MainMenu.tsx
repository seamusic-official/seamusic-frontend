import Image from 'next/image';
import navImgSrc from '@/shared/assets/main/Frame 30.png';
import s from './MainMenu.module.scss';
import imgHomeImage from '@/shared/assets/main/home_line.svg';
import imgHomeImageWhite from '@/shared/assets/main/home_line_white.svg';
import imgMessagesImage from '@/shared/assets/main/messages_line.svg';
import imgMessagesImageWhite from '@/shared/assets/main/messages_line_white.svg';
import imgDashboardImage from '@/shared/assets/main/dashboard_line.svg';
import imgDashboardImageWhite from '@/shared/assets/main/dashboard_line_white.svg';
import imgPlaylistsImage from '@/shared/assets/main/playlists_line.svg';
import imgPlaylistsImageWhite from '@/shared/assets/main/playlists_line_white.svg';
import imgSettingsImage from '@/shared/assets/main/settings_line.svg';
import imgSettingsImageWhite from '@/shared/assets/main/settings_line_white.svg';
import imgLogoutImage from '@/shared/assets/main/logout_line.svg';
import imgLogoutImageWhite from '@/shared/assets/main/logout_line_white.svg';
import { NavItem } from '@/shared/ui';
import { MenuItemType } from '@/shared/ui/nav-item/NavItem';

type MainMenuItems = {
  menu_main_items: Array<MenuItemType>,
  menu_settings_items: Array<MenuItemType>
};

const MAIN_MENU_ITEMS: MainMenuItems = {
  menu_main_items : [
    {
      id: "001",
      data: {
        id: "001",
        text: "Home",
        img: imgHomeImage,
        imgWhite: imgHomeImageWhite,
      }
    },
    {
      id: "002",
      data: {
        id: "002",
        text: "Messages",
        img: imgMessagesImage,
        imgWhite: imgMessagesImageWhite
      }
    },
    {
      id: "003",
      data: {
        id: "003",
        text: "Dashboard",
        img: imgDashboardImage,
        imgWhite: imgDashboardImageWhite
      }
    },
    {
      id: "004",
      data: {
        id: "004",
        text: "Playlists",
        img: imgPlaylistsImage,
        imgWhite: imgPlaylistsImageWhite
      }
    }
  ],
  menu_settings_items : [
    {
      id: "005",
      data: {
        id: "005",
        text: "Settings",
        img: imgSettingsImage,
        imgWhite: imgSettingsImageWhite
      }
    },
    {
      id: "006",
      data: {
        id: "006",
        text: "Log out",
        img: imgLogoutImage,
        imgWhite: imgLogoutImageWhite
      }
    }
  ]
};

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
