import React from 'react';
import styles from '../../assets/scss/component/about/Me.scss';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
    return (
        <nav className={styles.Navigation}>
            <div>
                <NavLink to={'/about/me'}>Kickscar</NavLink>
                    <span/>
                    <NavLink to={'/about/location'}>Location</NavLink>
            </div>
        </nav>
    );
};

export default Navigation;