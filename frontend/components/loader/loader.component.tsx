import cx from 'classnames';

import styles from 'components/loader/loader.module.css';

export default function LineLoader() {
  const loaderEllipsisClasses = cx('bg-white');

  return (
    <div className={styles.loader}>
      <div className={loaderEllipsisClasses} />
      <div className={loaderEllipsisClasses} />
      <div className={loaderEllipsisClasses} />
      <div className={loaderEllipsisClasses} />
    </div>
  );
}
