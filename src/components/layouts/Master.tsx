import {Home as HomeIcon} from '@material-ui/icons';

const Master = ({ children }) => {

  const isActive = false;

  return (
    <>
      <div className="master">
        <nav className="side-nav">
          <span>Numly</span>
          <ul>
            <li className="nav-item active">
              <HomeIcon className="icon"/>
              <span>Home</span>
            </li>
            <li>
              Generate
            </li>
            <li>
              History
            </li>
            <li>
              {/* <LogoutIcon /> */}
              Logout
            </li>
          </ul>
        </nav>
        <main className="main">{children}</main>
      </div>
    </>
  );
};

export default Master;
