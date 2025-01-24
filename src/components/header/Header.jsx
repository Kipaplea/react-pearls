import { useState } from 'react'
import { Link, NavLink } from "react-router";
import "./header.scss"
import monument from "/monument.svg"
import burger from "/burger.svg"


export const Header = () => {
    const [ isBurgerOpen, setIsBurgerOpen ] = useState(false)

    const toggleBurger = () => {
        setIsBurgerOpen(!isBurgerOpen)
    }

    return (
    <>
        <header className="header">
            <div className="head__wrap">
                <div className="head">
                    <NavLink to="/" className="head__logo">
                        <img src={monument} alt="monument"/>
                        Peterburg Pearls
                    </NavLink>
                    <div className="head__links">
                        <NavLink className="head__link" to="/">Главная страница</NavLink>
                        <NavLink className="head__link" to="/memorials">Достопримечательности</NavLink>
                        <NavLink className="head__link" to="/contact">Контакты</NavLink>
                    </div>
                    { isBurgerOpen &&
                        <div className="burger__main">
                            <Link className="burger__close" onClick={toggleBurger}>&#10006;</Link>
                            <NavLink className="burger__link" to="/">Главная страница</NavLink>
                            <NavLink className="burger__link" to="/memorials">Достопримечательности</NavLink>
                            <NavLink className="burger__link" to="/contact">Контакты</NavLink>
                        </div> 
                    }
                    <NavLink className="head__burger head__burger1" onClick={toggleBurger}>
                        <img className="head__burger-img" src={burger} alt="burger"/>
                    </NavLink>
                </div>
            </div>
        </header>
    </>
)}