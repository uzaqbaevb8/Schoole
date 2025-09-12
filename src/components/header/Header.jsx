import './Header.css';
import { Search, Globe, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
function Header() {

    return (
        <header>
            <div className="left">
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="logo">
                    <div className="logo-icon">40</div>
                    <span className="logo-text">school</span>
                </div>
                <nav className='menu'>
                    <a href="/">Home</a>
                    <a href="/About">О школе</a>
                    <a href="/Training">Обучение</a>
                    <a href="/Rules">Правила</a>
                    <a href="/News">Новости</a>
                    <a href="/Support">Поддержка</a>
                </nav>
            </div>
            <div className="right">
                <Sun size={18} className="icon" />
                <div className='language'>
                    <img src="./public/Language Switcher.svg"></img>
                    <select>
                        <option value="ru">Русский</option>
                        <option value="en">English</option>
                        <option value="uz">Oʻzbekcha</option>
                        <option value="QR">Qaraqalpaqsha</option>
                    </select>
                </div>
                <button className="contact-btn">login</button>
            </div>
        </header>
    );
}

export default Header;
