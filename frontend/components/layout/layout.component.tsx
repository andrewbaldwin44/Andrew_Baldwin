import cx from 'classnames';

import Header from 'components/navbar/navbar.component';

interface ILayout {
  children: React.ReactElement | React.ReactElement[];
  hasGutter?: boolean;
}

export default function Layout({ children, hasGutter = true }: ILayout) {
  const layoutClasses = cx('container ', {
    'px-3 mx-auto py-container': hasGutter,
  });

  return (
    <>
      <Header />
      <main className={layoutClasses}>{children}</main>
    </>
  );
}
