import { useState } from 'react'
import town from '/town.png'
import acc from '/acc.svg'
import send from '/send.svg'

import "./contact.scss"

export const Contact = () => {
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }


    return (
        <>
            <main className="main">
            <div className="top__contact">
                <h1 className="top__contact-title">Контакты</h1>
            </div>
            <section className="section">
                <div className="section__welcome">
                    <h1 className="section__title">Мы поможем вам раскрыть все загадки города!</h1>
                    <p className="section__text">Наша команда экспертов готова ответить на любые ваши вопросы о Северной столице. Мы с радостью поделимся с вами своими знаниями о истории, культуре, достопримечательностях и лучших местах для отдыха в Санкт-Петербурге.</p>
                    <button className="section__button section__button1" onClick={toggleModal}>Связаться с нами</button>
                </div>
                <div className="section__links">
                    <h1 className="section__title">Часы работы:</h1>
                    <p className="section__time">ПН: 9:00 - 17:00 <br/>
                        ВТ: 9:00 - 17:00 <br/>
                        СР: 9:00 - 17:00 <br/>
                        ЧТ: 9:00 - 17:00 <br/>
                        ПТ: 9:00 - 17:00 <br/>
                        СБ: 10:00 - 16:00 <br/>
                        ВС: 10:00 - 16:00
                    </p>
                </div>
            </section>
            <div className="contact">
                <div className="contact__left">
                    <h1 className="contact__title">Контакты:</h1>
                    <p className="contact__text">
                        Телефон: +7(999)999-9999 <br/>
                        Email: xxxxxx@email.com <br/>
                        Адрес: Россия, Ленинградская область, г. Санкт-Петербург <br/>
                        Социальные сети: vk.com/xxxxxx
                    </p>
                    <h1 className="contact__title">Местоположение:</h1>
                    <iframe className="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Af4818ef7f96aae6e66c4c49af908e5ead7d702d3f93b871159df7101924511ee&amp;source=constructor" width="610" height="333" style={{borderRadius: '12px'}} frameBorder="0"></iframe>
                </div>
                <div className="contact__right">
                    <img className="contact__img" src={town} alt="town"/>
                </div>
            </div>
            { isModalOpen &&
            <div className="modal modal1">
                <div className="modal__main">
                    <button className="modal__close" onClick={toggleModal}>&#10006;</button>
                    <div className="modal__message">
                        <img className="modal__message-img" src={acc} alt="acc"/>
                        <div className="modal__message-text">
                            <h1 className="modal__title">Тех. Поддержка</h1>
                            <p className="modal__text">Здравствуйте! Рады, что вы выбрали наши услуги. Спасибо, что обратились в нашу службу поддержки. Мы рады помочь вам с вашей проблемой.</p>
                        </div>
                    </div>
                    <h2 className="modal__error">Вы не можете отправлять сообщения, служба тех. поддержки сейчас не с сети</h2>
                    <div className="modal__send">
                        <p className="modal__send-text">Введите сообщение</p>
                        <img className="modal__send-img" src={send} alt="send"/>
                    </div>
                </div>
            </div>
            }
            </main>
        </>
    );
}



