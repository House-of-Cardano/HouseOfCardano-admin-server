import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
   return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={styles.active} to='/home'>home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} to='/setup'>setup</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} to='/transactions'>transactions</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} to='/minting'>minting</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;