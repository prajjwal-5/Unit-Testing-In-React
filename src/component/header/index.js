import React from 'react';
import Logo from '../../assets/logo.ico';
import './styles.scss';
export const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>
            </div>
        </header>
    )
}