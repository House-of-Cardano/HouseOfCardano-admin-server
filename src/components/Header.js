import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
   return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/home'>home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/setup'>setup</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/transactions'>transactions</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/minting'>minting</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;