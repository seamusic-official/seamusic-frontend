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

export type IdValue = {
  id: string,
  value: string
}

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
