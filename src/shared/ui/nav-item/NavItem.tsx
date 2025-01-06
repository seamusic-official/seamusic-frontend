"use client"

import styles from './NavItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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

export function NavItem({ data }: MenuItemType) {
  const [isCurElHover, setIsCurElHover] = useState(false);

  const handlerIsCurElHover =  () => {
    setIsCurElHover(!isCurElHover);
  }

  const curImgSrc = (): StaticImageData => {
    return isCurElHover ? data.imgWhite : data.img;
  }

  return (
    <div
      className={styles.navItem}
      onMouseEnter={handlerIsCurElHover}
      onMouseLeave={handlerIsCurElHover}
    >
      <Image
          src={curImgSrc()}
          alt=""
          role="presentation"
					className={styles.imgTopLeft}
        />
      <Link href='/' className={styles.navItemText}>
        {data.text}
      </Link>
    </div>
  )
}
