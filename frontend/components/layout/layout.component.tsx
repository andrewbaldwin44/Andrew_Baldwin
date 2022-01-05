import Header from 'components/navbar/navbar.component';

interface ILayout {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <main className='container px-3 mx-auto py-container'>{children}</main>
    </>
  );
};

export default Layout;
