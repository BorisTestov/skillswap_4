import React, { FC } from 'react';
import styles from './profile-avatar.module.css';
import { AvatarProps } from './type';
import editIcon from '@shared/assets/icons/gallery-edit.svg';
import { getImageUrl } from '@shared/lib/utils/imageUtils';

export const ProfileAvatar: React.FC<AvatarProps> = ({ avatarUrl, onEdit }) => {
  return (
    <div className={styles.avatarWrapper}>
      <div className={styles.backColor}>
      <img src={getImageUrl(avatarUrl)} alt="Аватар" className={styles.avatar} />
      </div>
      <button
        className={styles.editButton}
        onClick={onEdit}
        type="button"
        aria-label="Редактировать аватар"
      >
        <img src={editIcon} alt="Иконка редактирования аватара" className={styles.editIcon} />
      </button>
    </div>
  );
};

export default ProfileAvatar;
