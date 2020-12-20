import {
  HomeRounded as HomeIcon,
  ExitToAppRounded as LogoutIcon,
  HistoryRounded as HistoryIcon,
  ListRounded as GenerateIcon,
} from '@material-ui/icons';

const Master = ({ children }) => {

  const isActive = false;

  return (
    <>
      <div className="master">
        <nav className="side-nav">
          <div className="nav-content">
            <p className="logo">Numly</p>
            <ul className="nav-menu">
              <li className="nav-item">
                <HomeIcon className="icon"/>
                <span>Home</span>
              </li>
              <li className="nav-item">
                <GenerateIcon className="icon"/>
                Generate
              </li>
              <li className="nav-item">
                <HistoryIcon className="icon"/>
                History
              </li>
              <li className="nav-item">
                <LogoutIcon className="icon"/>
                Logout
              </li>
            </ul>
          </div>
        </nav>
        <main className="main">{children}</main>
      </div>
    </>
  );
};

export default Master;
