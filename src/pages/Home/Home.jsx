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
          <div className='Quick_links-text-link_Our_teachers'>
            <img src="./public/Our teachers.svg" alt='Our teachers.svg' />
            <p>Наши учителя</p>
          </div>
          <div className='Qucik_links-text-link_Available_courses'>
            <img src="./public/Available courses.svg" alt='Available courses.svg' />
            <p>Доступные курсы</p>
          </div>
        </div>
        <div className='Our_Teachers'>
          <div className='Our_Teachers-text'>
            <h2>Our Teachers</h2>
            <p>Meet our dedicated team of educators
              committed to providing the highest quality
              education and support for our students.
            </p>
          </div>
          <div className='Our_Teachers-cards'>
            <div className='Our_Teachers-cards-item'>
              <img src='./public/teacher1.png' alt='teacher1.png' />
              <h1>Dr. Sarah Johnson</h1>
              <h2>Principal</h2>
            </div>
          </div>
          <dic className='Our_Teachers-cards_2'>
            <div className='Our_Teachers-cards_2-item'>
              <img src='./public/teacher2.png' alt='teacher2.png' />
              <h1>Prof. Michael Chen</h1>
              <h2>Mathematics</h2>
            </div>
          </dic>
          <div className='Our_Teachers-cards_3'>
            <div className='Our_Teachers-cards_3-item'>
              <img src='./public/teacher3.png' alt='teacher3.png' />
              <h1>Dr. Emily Rodriguez</h1>
              <h2>Science</h2>
            </div>
          </div>
          <div className='Our_Teachers-cards_4'>
            <div className='Our_Teachers-cards_4-item'>
              <img src='./public/teacher4.png' alt='teacher4.png' />
              <h1>Prof. David Kim</h1>
              <h2>Literature</h2>
            </div>
          </div>
        </div>
        <div className='About_our_school'>
          <div className='About_our_school-image'>
            <img src='./public/image of our school.jpg' alt='image of our school.jpg' />
          </div>
          <div className='About_our_school-image_Gradient'>
            <img src='./public/About_our_school-image_Gradient.png' alt='' />
          </div>
          <div className='About_our_school-text'>
            <h1>О нашей школе</h1>
            <p>Наша школа предоставляет
              качественное образование с 1998
              года. Мы фокусируемся на развитии
              не только академических знаний, но и
              критического мышления, творчества
              и социальных навыков у наших
              учеников.
            </p>
          </div>
          <div className='About_our_school-text-link'>
            <img src='./public/link_Students.svg' alt='link_Students' />
            <p>Учеников</p>
          </div>
          <div className='About_our_school-text-link_2'>
            <img src='./public/link_Teachers.svg' alt='link_Teachers' />
            <p>Учителей</p>
          </div>
          <div className='About_our_school-text-link_3'>
            <img src='./public/link_Classes.svg' alt='link_Classes' />
            <p>Классов</p>
          </div>
          <div className='About_our_school-text-link_4'>
            <img src='./public/link_Years of experience.svg' alt='link_Years of experience.svg' />
            <p>Лет опыта</p>
          </div>
          <div className='About_our_school-text-link_Learn_more_about_us'>
            <img src='./public/section_Link_SVG.svg' alt='section_link_SVG.svg' />
            <p>Узнать больше о нас</p>
          </div>
        </div>
        <div className='Upcoming Events'>
          <div className='Upcoming_Events-text'>
            <h2>Upcoming Events</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;