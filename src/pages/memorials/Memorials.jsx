import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { useState } from "react"; // Импортируем useState
import './mem.scss'
import sort from '/sort.svg'

const fetchDataMemorials = async () => {
    try {
        const response = await fetch('https://672b0d95976a834dd025652d.mockapi.io/Place-1');
        const data = await response.json()
        
        return data
    } catch (error) {
        console.error('Ошибка', error)
    }
}

const fetchDataRates = async () => {
    try {
        const response = await fetch('https://672b0d95976a834dd025652d.mockapi.io/Rates-1');
        const data = await response.json()
        
        return data
    } catch (error) {
        console.error('Ошибка', error)
    }
}

export const Memorials = () => {
    const [selectedCategory, setSelectedCategory] = useState('all'); // Состояние для выбранной категории

    const {data: memorialsData, isLoading: memorialsIsLoading} = useQuery({
        queryKey: ['ns levfk pltcm xnj-nj ,eltn&'],
        queryFn: () => fetchDataMemorials(),
    });

    const {data: ratesData, isLoading: ratesIsLoading} = useQuery({
        queryKey: ['unluck'],
        queryFn: () => fetchDataRates(),
    });

    // Функция для обработки нажатия на кнопки фильтрации
    const handleFilterClick = (category) => {
        setSelectedCategory(category);
    };

    // Фильтруем данные на основе выбранной категории
    const filteredMemorials = memorialsData?.filter(item => 
        selectedCategory === 'all' || item.category === selectedCategory
    );

    return (
        <>  
            <div className="top">
                <h1 className="top__title">Достопремичательности</h1>
                <p className="top__text">северной столицы</p>
            </div>
            <div className="main__wrap">
                <div className="main__welcome">
                    <h1 className="main__title">Добро пожаловать в Санкт-Петербург!</h1>
                    <p className="main__text">
                        Город на Неве – это сокровищница мировой культуры и архитектуры,
                        которую невозможно забыть. Величественные дворцы, изящные мосты,
                        уютные каналы и многочисленные музеи создают неповторимую атмосферу.
                        Здесь каждый камень дышит историей, а каждый уголок таит в себе
                        множество секретов.
                    </p>
                </div>
                <div className="main__links">
                    <h1 className="main__title">
                        Что-то присмотрели? <br /> Свяжитесь с нами!
                    </h1>
                    <Link className="main__link" to="/contact">Контакты</Link>
                </div>
            </div>
  
            <div className="select">
                <div className="select__filter">
                    <Link className="select__filter-link categories" onClick={() => handleFilterClick('all')}>Всё</Link>
                    <Link className="select__filter-link categories" onClick={() => handleFilterClick('музей')}>Музеи</Link>
                    <Link className="select__filter-link categories" onClick={() => handleFilterClick('памятник')}>Памятники</Link>
                </div>
                <div className="content__links" id="sort">
                    <button className="content__link">По Алфавиту (А-Я)</button>
                    <button className="content__link">По Алфавиту (Я-А)</button>
                </div>
                <div className="select__search">
                    <img className="select__search-img" src={sort} alt="sort" id="sort-open" />
                    <input type="text" className="select__search-input" placeholder="Введите для поиска..."/>
                </div>
            </div>
            <section className="content">
                <section className="content-items">
                    {memorialsIsLoading 
                    ? <div className="mask active"><div className="loader"></div></div> 
                    : filteredMemorials?.map(item => {
                        return (   
                            <div className="content-item" key={item.id}>
                                <img className="content__img" src={item.photo} alt={item.title} />
                                <div className="content__sub">
                                    <h2 className="content__title">{item.title}</h2>
                                    <p className="content__text">{item.text}</p>
                                    <p className="content__address">{item.address}</p>
                                    <Link className="content__link" to={item.link}>Перейти</Link>
                                </div>
                            </div>                
                        )
                    })}
                </section>
            </section>
            
            <article className="rates">
                <h1 className="rates__title">Отзывы</h1>
                <section className="rates__items">
                    { ratesIsLoading
                    ? <div className="mask active"><div className="loader"></div></div> 
                    :
                    ratesData.map((rate, index) => 
                        <div className="rates__rate" key={`${rate.name}-${index}`}>
                            <h2 className="rates__name">{rate.name}</h2>
                            <p className="rates__content">{rate.content}</p>
                        </div>
                    )}
                </section>
            </article>
        </>
    );
}