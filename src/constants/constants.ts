import { MainMenuItems } from "@/shared/types/types";
import imgHomeImage from '/public/main/home_line.svg';
import imgHomeImageWhite from '/public/main/home_line_white.svg';
import imgMessagesImage from '/public/main/messages_line.svg';
import imgMessagesImageWhite from '/public/main/messages_line_white.svg';
import imgDashboardImage from '/public/main/dashboard_line.svg';
import imgDashboardImageWhite from '/public/main/dashboard_line_white.svg';
import imgPlaylistsImage from '/public/main/playlists_line.svg';
import imgPlaylistsImageWhite from '/public/main/playlists_line_white.svg';
import imgSettingsImage from '/public/main/settings_line.svg';
import imgSettingsImageWhite from '/public/main/settings_line_white.svg';
import imgLogoutImage from '/public/main/logout_line.svg';
import imgLogoutImageWhite from '/public/main/logout_line_white.svg';

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

// export const MAIN_MENU_ITEMS: MainMenuItems = {
//   menu_main_items : [
//     {
//         id: "001",
//         text: "Home",
//         img: imgHomeImage
//     },
//     {
//         id: "002",
//         text: "Messages",
//         img: imgMessagesImage
//     },
//     {
//         id: "003",
//         text: "Dashboard",
//         img: imgDashboardImage
//     },
//     {
//         id: "004",
//         text: "Playlists",
//         img: imgPlaylistsImage
//     }
//   ],
//   menu_settings_items : [
//     {
//         id: "005",
//         text: "Settings",
//         img: imgSettingsImage
//     },
//     {
//         id: "006",
//         text: "Log out",
//         img: imgLogoutImage
//     }
//   ]
// };
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
