import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
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
        </div>
    )
}

export default Menu;
