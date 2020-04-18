// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        <h3>읽어주셔서 감사합니다 ( _ _)</h3>
        <br></br>
        - {author.bio}
      </p>
    </div>
  );
};

export default Author;
