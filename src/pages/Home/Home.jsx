import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='container'>
      <div className='main-conainer'>
        <div className='main'>
          <div className="main-text">
            <h1>Добро
              пожаловать в
              нашу школу
            </h1>
            <p>Место, где знания
              встречаются с инновациями,
              а ученики готовятся к
              вызовам завтрашнего дня.
            </p>
            <img src='./public/LinkСвязаться с нами.svg' alt="LinkСвязаться с нами.svg" />
            <div className="main-link">
              <img src='./public/Link.svg' alt="Link" />
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='section-text'>
            <h2>Последние
              новости
            </h2>
            <img src='./public/Link Смотреть все.svg' alt='Link Смотреть все.svg' />
          </div>
          <div className='section-cards'>
            <div className='section-cards-item'>
              <img src='./public/school winners.png' alt='school winners.png' />
            </div>
            <div className='section-csrdas-data'>
              <img src='public/data-icons.svg' alt='data-icons' />
              <p>5 мая 2025</p>
            </div>
            <div className='section-cards-paragrouph'>
              <h1>Объявлены победители
                школьной олимпиады
              </h1>
              <p>Поздравляем всех участников и
                победителей нашей ежегодной
                школьной олимпиады.
              </p>
              <img src='./public/Link Читать далее.svg' alt='Link Читать далее.svg' />
            </div>
          </div>
          <div className='computer_classroom'>
            <div className='computer_clasroom_cards-item'>
              <img src='./public/campyuter classrom.png' alt='campyuter classrom.png' />
              <img src="./public/data-icons.svg" alt="data-icons.svg" className='data-icons' />
              <p>28 апреля 2025</p>
            </div>
            <div className='computer_classroom-paragrouph'>
              <h1>Открытие нового
                компьютерного класса
              </h1>
              <p>Мы рады сообщить об открытии нашей
                новой современной компьютерной
                лаборатории.
              </p>
              <img src='./public/Link Читать далее.svg' alt='Link Читать далее.svg' />
            </div>
          </div>
          <div className='Parental_schedule'>
            <div className='Parental_schedule_cards-item'>
              <img src='./public/Parental schedule.png' alt='Panental schedule.png' />
              <img src='./public/data-icons.svg' alt='data-icons.svg' className='data-icons' />
              <p>15 апреля 2025</p>
            </div>
            <div className='Parental_schedule-paragrouph'>
              <h1>Расписание родительских
                собраний
              </h1>
              <p>Опубликовано расписание
                предстоящих родительских собраний.
              </p>
              <img src='./public/Link Читать далее.svg' alt='Link Читать далее.svg' />
            </div>
          </div>
        </div>
        <div className='Quick_links'>
          <div className='Quick_links-text'>
            <h2>Быстрые ссылки</h2>
          </div>
          <div className='Quick_links-text-link'>
            <img src="./public/Lesson schedule.svg" alt="Lesson schedule.svg" />
            <p>Расписание уроков</p>
          </div>
          <div className='Quicl_links-text-link_School_documents'>
            <img src="./public/School documents.svg" alt="School documents.svg" />
            <p>Школьные документы</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
