import React, { FC } from 'react';
import clsx from 'clsx';
import styles from './profile-menu.module.css';
import { NavLink } from 'react-router-dom';
import favorites from '@shared/assets/icons/favorites.svg';
import idea from '@shared/assets/icons/idea.svg';
import user from '@shared/assets/icons/user.svg';
import request from '@shared/assets/icons/request.svg';
import message from '@shared/assets/icons/message-text.svg';

export const ProfileMenuUI: FC = () => {
  const menuItems = [
    { label: 'Заявки', path: '/profile/requests', icon: request },
    { label: 'Мои обмены', path: '/profile/exchanges', icon: message },
    { label: 'Избранное', path: '/profile/favorites', icon: favorites },
    { label: 'Мои навыки', path: '/profile/skills', icon: idea },
    { label: 'Личные данные', path: '/profile', icon: user, end: true },
  ];

  return (
    <>
      {menuItems.map(({ label, path, icon, end }) => {
        return (
          <NavLink
            key={path}
            to={path}
            end={end}
            className={({ isActive }) =>
              clsx(styles.link, { [styles.link_active]: isActive })
            }
          >
            <img
              className={styles.icon}
              src={icon}
              alt={label}
              loading="lazy"
            />
            <span className={styles.text}>{label}</span>
          </NavLink>
        );
      })}
    </>
  );
};

export default ProfileMenuUI;
