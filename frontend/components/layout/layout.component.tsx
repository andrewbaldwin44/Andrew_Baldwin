import Header from 'components/header/header.component';

interface ILayout {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <div className='container px-3 mx-auto'>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
