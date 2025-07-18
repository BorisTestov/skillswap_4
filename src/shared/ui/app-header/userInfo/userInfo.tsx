import React from 'react';
import styles from './userInfo.module.css';
import placeholderAvatar from '../../../assets/avatars/user_1.jpg';
import { UserInfoProps } from './types';
import { getImageUrl } from '@shared/lib/utils/imageUtils';


export const UserInfo = React.memo(({ userName = 'Мария', avatarUrl }: UserInfoProps) => (
    <div className={styles.userBlock}>
        <span className={styles.userName}>{userName}</span>
        <img
        src={avatarUrl ? getImageUrl(avatarUrl) : placeholderAvatar}
        alt="User avatar"
        className={styles.avatar}
        loading="lazy"
        />
    </div>
));