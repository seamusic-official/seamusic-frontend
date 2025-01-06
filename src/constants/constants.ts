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
import img001 from '@/shared/assets/main/foto001.png';
import img002 from '@/shared/assets/main/foto002.png';
import { MenuItemType } from "@/shared/ui/nav-item/NavItem";
import { IdValue } from "@/shared/ui/tag/Tag";
import { StaticImageData } from 'next/image';

export type MainMenuItems = {
  menu_main_items: Array<MenuItemType>,
  menu_settings_items: Array<MenuItemType>
};

export type TagsType = Record<string, IdValue[]>;

export type ImgData = {
  id: string;
  value: string;
  image: StaticImageData;
}

export type TopImages = {
  id: string;
  data: ImgData;
};

export const TEXT_AUTH = {
  left_title: "Self-expression for everyone",
  form_sign_in: "Sign in",
  form_text_logo: "SeaMusic",
  form_google: "Continue with Google",
  form_spotify: "Continue with Spotify",
  form_divider: "OR",
  form_email: "Email adress",
  form_password: "Password",
  form_forget: "Forget your password",
  form_registration: "Don’t have an account?",
  form_sign_up: "Sign up",
};

export const MAIN_MENU_ITEMS: MainMenuItems = {
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

export const TAGS: TagsType = {
  contentTopLeftTags: [
    {id: '001', value: 'lyrics'},
    {id: '002', value: 'memories'},
    {id: '003', value: 'pop'},
    {id: '004', value: 'romance'},
    {id: '005', value: 'trends'},
  ],
};

export const CONTENT_TOP_LEFT_IMAGES: Array<TopImages> = [
  {
    id: '001',
    data: {
      id: '001',
      value: 'For You: Beats',
      image: img001
    }
  },
  {
    id: '002',
    data: {
      id: '002',
      value: 'For You: Tracks',
      image: img002
    }
  }
];
