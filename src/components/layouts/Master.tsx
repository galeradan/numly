import { SideNav } from '@numly/components';

const Master = ({ children }) => {
  return (
    <>
      <div className="master">
        <SideNav />
        <main className="main">{children}</main>
      </div>
    </>
  );
};

export default Master;
