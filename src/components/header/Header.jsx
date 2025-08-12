import { Sun, Menu, ChevronDown, Globe, Search } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
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
                        <div className='buttom-connect'>
                            <p>Связаться с нами</p>
                        </div>
                    </div >
                </div >
                <div className='section'>
                    <div className='heading'>
                        <h1>Добро
                            пожаловать в
                            нашу школу
                        </h1>
                        <p>Место, где знания
                            встречаются с инновациями,
                            а ученики готовятся к
                            вызовам завтрашнего дня.
                        </p>
                    </div>
                    <div className='section-img'>
                        <p>Связаться с нами</p>
                        <img src='./public/section_Link_SVG.svg' alt='section_img' />
                    </div>
                    <div className='section-link'>
                        <p>Узнать больше</p>
                    </div>
                </div>
                <div className='section-2'>
                    <div className='heading-news'>
                        <h1>Последние
                            новости
                        </h1>
                    </div>
                    <div className='heading-news-text'>
                        <p>Смотреть все</p>
                        <img src='./public/section_2 link button.svg' alt='section_img_2'/>
                    </div>
                    <div className='backgroungd-school_winners'>
                        <img src='./public/school winners.png' alt='school_winners' />
                        <div className='data'>
                            <img src='' alt=''/>
                            <p>5 мая 2025</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
