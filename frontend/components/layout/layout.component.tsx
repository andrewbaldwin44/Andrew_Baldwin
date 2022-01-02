import Header from 'components/header/header.component';

interface ILayout {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <div className='container px-3 mx-auto'>
        <main className='pt-8' style={{ height: 'calc(100vh - var(--navbar-height)' }}>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
