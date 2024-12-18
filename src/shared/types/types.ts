import { StaticImageData } from "next/image";

export type MenuItemDataType = {
  id: string,
  text: string,
  img: StaticImageData,
  imgWhite: StaticImageData
};

export type MenuItemType = {
  id: string,
  data: MenuItemDataType
};

export type MainMenuItems = {
  menu_main_items: Array<MenuItemType>,
  menu_settings_items: Array<MenuItemType>
};
// export type MenuItemDataType = {
//   id: string,
//   text: string,
//   img: StaticImageData
// };

// export type MenuItemType = {
//   id: string,
//   data: MenuItemDataType
// };

// export type MainMenuItems = {
//   menu_main_items: Array<MenuItemType>,
//   menu_settings_items: Array<MenuItemType>
// };
