import React from 'react';
import navbarMenuIcon from '../../assets/navbar menu button.svg';
import './NavBar.scss';

const NavBar = () => {
    return (
        <div className={'navbar'}>
            <div className="navbar__menu">
                <a className={'navbar-menu-icon'} href="/">
                    <img src={navbarMenuIcon} alt="navbarMenuIcon"/>
                </a>
                <div className={'navbar__list'}>
                    <a href={'/'} className={'navbar__list-item'}>Київ</a>
                    <a href={'/'} className={'navbar__list-item'}>Одеса</a>
                    <a href={'/'} className={'navbar__list-item'}>Харків</a>
                </div>
            </div>
            <div className="navbar-tools">
                <div className="navbar-search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder={'пошук новин'}/>
                </div>
                <div className="navbar__list-icons">
                    <a href=""><i className="fa-brands fa-telegram fa-lg"></i></a>
                    <a href=""><i className="fa-brands fa-facebook fa-lg"></i></a>
                    <a href=""><i className="fa-brands fa-instagram fa-lg"></i></a>
                    <a href=""><i className="fa-brands fa-youtube fa-lg"></i></a>
                </div>
                <div className="navbar-translation">
                    <p className={'navbar-column'}>|</p>
                    <div className="ru">RU</div>
                    <div className="ua">UA</div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;