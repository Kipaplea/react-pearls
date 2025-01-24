import { Link } from "react-router"
import most from '/most.jpg'
import sobor from '/sobor.jpg'
import ermitaz from '/ermitaz.jpg'
import left_arrow_icon from '/left_arrow_icon.svg'
import right_arrow_icon from '/right_arrow_icon.svg'
import street from '/street.jpg'
import tower from '/tower.jpg'

import "./home.scss"

export const Home = () => {
    return(
    <>
        <div className="slider__container">
        <div className="slider">
            <div className="slide active">
                <img className="slider__img" src={most} alt="most"/>
                <p className="slider__subtitle">Путеводитель Санкт-Петербург</p>
                <p className="slider__title">Разводные мосты</p>
                <p className="slider__text">Один из самых впечатляющих видов Санкт-Петербурга – это развод мостов. Этот уникальный процесс, когда мосты разводятся, чтобы пропустить крупные суда, стал визитной карточкой города.</p>
                <Link className="slider__link" to="#">Подробнее ➟</Link>
            </div>
            <div className="slide">
                <img className="slider__img" src={sobor} alt="sobor"/>
                <p className="slider__subtitle">Путеводитель Санкт-Петербург</p>
                <p className="slider__title">Казанский собор</p>
                <p className="slider__text">Казанский собор – это один из самых известных и красивых храмов Санкт-Петербурга. Его величественный фасад и колокольня являются узнаваемыми символами города.</p>
                <Link className="slider__link" to="#">Подробнее ➟</Link>
            </div>
            <div className="slide">
                <img className="slider__img" src={ermitaz} alt="sobor"/>
                <p className="slider__subtitle">Путеводитель Санкт-Петербург</p>
                <p className="slider__title">Эрмитаж</p>
                <p className="slider__text">Государственный Эрмитаж – один из крупнейших и старейших музеев мира. Его коллекции охватывают историю человечества от древности до наших дней.</p>
                <Link className="slider__link" to="#">Подробнее ➟</Link>
            </div>
        </div>
        <button className="prev"><img src={left_arrow_icon} alt="arrow-left"/></button>
        <button className="next"><img src={right_arrow_icon} alt="right-left"/></button>
    </div>
    <div className="burger burger1">
        <div className="burger__main">
            <button className="burger__close">&#10006;</button>
            <Link className="burger__link" to="/">Главная страница</Link>
            <Link className="burger__link" to="/memorials">Достопримечательности</Link>
            <Link className="burger__link" to="/contact">Контакты</Link>
        </div>
    </div>
    <div className="burger burger1">
        <div className="burger__main">
            <button className="burger__close">&#10006;</button>
            <Link className="burger__link" to="/">Главная страница</Link>
            <Link className="burger__link" to="/memorials">Достопримечательности</Link>
            <Link className="burger__link" to="/contact">Контакты</Link>
        </div>
    </div>


        <div className="block">
            <img className="block__img" src={street} alt="street"/>
            <div className="block__texts">
                <h1 className="block__title">О великой северной столице</h1>
                <p className="block__text">Санкт-Петербург – это город, где история оживает в каждой детали. Основанный Петром I на болотах, он превратился в жемчужину Балтики. Его величественные дворцы, соборы, набережные Невы – это свидетельства былой роскоши и величия Российской империи. Прогулка по его улицам – это путешествие сквозь века, от барокко до модерна.</p>
                <p className="block__text">Город контрастов, где старинные здания соседствуют с современными небоскребами, а шумные улицы плавно перетекают в тихие парки. Каждая эпоха оставила свой след в архитектуре и облике города. Эрмитаж, Русский музей, Казанский собор – эти и многие другие достопримечательности хранят в себе бесценные произведения искусства и артефакты.</p>
                <p className="block__text">Белые ночи – это визитная карточка Санкт-Петербурга. В это время город окутывается мягким, таинственным светом, и кажется, что время замедляет свой бег. Разводные мосты, как гигантские лебеди, расправляют свои крылья, пропуская корабли по Неве. Это зрелище завораживает и оставляет незабываемые впечатления.</p>
            </div>
        </div>
        <div className="block">

            <img className="block__img__adap" src={tower} alt="tower"/>
            <div className="block__texts">
                <h1 className="block__title">Культура Питера</h1>
                <p className="block__text">Санкт-Петербург – это город, где культура занимает особое место. Здесь проходят многочисленные фестивали, концерты, выставки. Мариинский театр, Филармония – эти названия известны далеко за пределами России. Город предлагает своим гостям широкий выбор развлечений: от посещения музеев и театров до прогулок по паркам и набережным.</p>
                <p className="block__text">Кухня Санкт-Петербурга – это отдельная история. Здесь можно попробовать традиционные русские блюда, такие как пирожки, блины и уха, а также насладиться изысканной европейской кухней. Кофейни и рестораны города предлагают широкий выбор напитков и десертов.</p>
                <p className="block__text">Санкт-Петербург – это город, который не перестает удивлять и вдохновлять. Он привлекает туристов со всего мира своей богатой историей, уникальной архитектурой и неповторимой атмосферой. Каждый найдет здесь что-то для себя: любители истории, искусства, природы, ночной жизни.</p>
            </div>
            <img className="block__img__noadap" src={tower} alt="tower"/>
        </div>
        <iframe className="map_home" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa9c9f911315dc461aba22479687ad0218bb51fbf697ed5bf1786e76ce2be8796&amp;source=constructor" frameBorder="0"></iframe>
    </>       
)}