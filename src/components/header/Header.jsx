import { Sun, Menu, ChevronDown, Globe, Search, User } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css';



export const Header = () => {
    return (
        <div>
            <div className='container'>
                <div className='header'>
                    <div className='logo'>
                        <div className='logo-img'>
                            <img src='./public/logo.svg' className='logo_2'></img>
                        </div>
                        <div className='logo-text'>40-mektep</div>
                    </div>
                    <nav className='nav-bar'>
                        <ul className='menu'>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/education"> школе</NavLink></li>
                            <li><NavLink to="/training">Обучение</NavLink></li>
                            <li><NavLink to="/rules">Правила</NavLink></li>
                            <li><NavLink to="/news">Новости</NavLink></li>
                            <li><NavLink to="/support">Поддержка</NavLink></li>
                        </ul>
                    </nav>
                    <div className='header-right'>
                        <div className='search'>
                            <Search />
                        </div>
                        <div className='language_switcher'>
                            <Globe />
                        </div>
                        <div>
                            <ul className='language'>Русский</ul>
                        </div>
                        <div className='language_scroll'>
                            <ChevronDown />
                        </div>
                        <div className='mobil_menu'>
                            <Menu />
                        </div>
                        <div className='theme_switcher'>
                            <Sun />
                        </div>
                        <div className='buttom-Admin'>
                            <Link to={'admin'}><User /></Link>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    )
}
