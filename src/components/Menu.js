import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext';

const Menu = () => {
    const theme = useContext(ThemeContext);
    return (
        <div style={{display:'flex',flexFlow:'row wrap',justifyContent:'space-between'}}>
            <ul style={{display:'flex',listStyle:'none'}}>
                <li>
                    <Link to="/">Anasayfa</Link>
                </li>
                <li>
                    <Link to="/users">Kullanıcılar</Link>
                </li>
                <li>
                    <Link to="/auth">Giriş</Link>
                </li>
                <li>
                    <Link to="/">Çıkış</Link>
                </li>
            </ul>
            <button onClick={theme.toggleTheme}>{theme.theme}</button>
        </div>
    )
}

export default Menu;
