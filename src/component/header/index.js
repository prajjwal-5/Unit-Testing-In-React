import React from 'react';
import Logo from '../../assets/logo.ico';
import './styles.scss';


export const Header = (props) => {
    return (
        <header data-test="header-component">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logo-img" src={Logo} alt="Logo"/>
                </div>
            </div>
        </header>
    )
}