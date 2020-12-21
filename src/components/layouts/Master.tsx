import {SideNav} from '@numly/components';

const Master = ({ children }) => {

  const isActive = false;

  return (
    <>
      <div className="master">
        <SideNav/>
        <main className="main">{children}</main>
      </div>
    </>
  );
};

export default Master;
