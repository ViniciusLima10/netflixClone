import React from 'react';
import './Header.css'

const Header = ({black}) => {
    return (
        <header className={black? 'black': ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo"/>
                </a>
                    <a className="navlist" href="/">Início</a>
                    <a className="navlist"href="/">Séries</a>
                    <a className="navlist"href="/">Filmes</a>
                    <a className="navlist"href="/">Bombando</a>
                    <a className="navlist"href="/">Minha lista</a>
            </div>
            <div className="header-user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"  alt="meu perfil"/>
                </a>
            </div>
        </header>
    )
}

export default Header