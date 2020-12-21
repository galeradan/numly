import {
    HomeRounded as HomeIcon,
    ExitToAppRounded as LogoutIcon,
    HistoryRounded as HistoryIcon,
    ListRounded as GenerateIcon,
  } from '@material-ui/icons';

  import { NavLink } from "@numly/components";
  
  const SideNav = () => {
  
    const isActive = false;
  
    return (
      <>
          <nav className="side-nav">
            <div className="nav-content">
              <p className="logo">Numly</p>
              <ul className="nav-menu">
                <li className="nav-item">
                    <NavLink href="/dashboard">
                        <a className="nav-link">
                            <HomeIcon className="icon"/>
                            Home
                        </a>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink href="/generate">
                        <a className="nav-link">
                            <GenerateIcon className="icon"/>
                            Generate
                        </a>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink href="/history">
                        <a className="nav-link">
                            <HistoryIcon className="icon"/>
                            History
                        </a>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink href="/logout">
                        <a className="nav-link">
                            <LogoutIcon className="icon"/>
                            Logout
                        </a>
                    </NavLink>
                </li>
              </ul>
            </div>
          </nav>
      </>
    );
  };
  
  export default SideNav;
  