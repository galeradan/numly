import React from 'react';
import {
  HomeRounded as HomeIcon,
  ExitToAppRounded as LogoutIcon,
  HistoryRounded as HistoryIcon,
  ListRounded as GenerateIcon,
  ArrowForwardIosRounded as ExpandIcon,
  ArrowBackIosRounded as MinimiseIcon,
} from '@material-ui/icons';

import { NavLink } from '@numly/components';

const SideNav = () => {
  const [isToggled, setToggled] = React.useState(Boolean);

  const onToggled = () => {
    setToggled(!isToggled);
  };

  return (
    <>
      <nav className={`side-nav ${isToggled ? 'collapsed' : ''}`}>
        <span role="button" className="toggler" onClick={onToggled}>
          {isToggled ? <MinimiseIcon /> : <ExpandIcon />}
        </span>
        <div className="nav-content">
          <p className="logo logo-md">Numly</p>
          <p className="logo logo-sm">N</p>
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink href="/home">
                <a className="nav-link">
                  <HomeIcon className="icon" />
                  <span>Home</span>
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/generate">
                <a className="nav-link">
                  <GenerateIcon className="icon" />
                  <span>Generate</span>
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/history">
                <a className="nav-link">
                  <HistoryIcon className="icon" />
                  <span>History</span>
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/logout">
                <a className="nav-link">
                  <LogoutIcon className="icon" />
                  <span>Logout</span>
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
