import { NavLink } from "react-router";
import "./footer.scss"

export const Footer = (props) => {
    return (
    <>
        <footer className="footer">
            <div className="footer__wrap">
                <p className="footer__text">Copyright © {props.year} Peterburg Pearls. Все права защищены.</p>
                <div className="footer__links">
                    <NavLink className="footer__link" to="/contact">Контакты</NavLink>
                    <NavLink className="footer__link" to="#">Политика конфиденциальности</NavLink>
                </div>
            </div>
        </footer>
    </>
)}