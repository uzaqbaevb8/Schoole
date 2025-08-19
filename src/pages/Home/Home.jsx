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
        <div className='Upcoming_Events'>
          <div className='Upcoming_Events-text'>
            <h2>Upcoming Events</h2>
          </div>
          <div className='Parent-Teacher_Conference'>
            <div className='Parnet-Teacher_Conference-item'>
              <h1>Parent-Teacher Conference</h1>
            </div>
            <div className='Parent-Teacher_Conference-date'>
              <img src='./public/data-icon.svg' alt='data-icon.svg' />
              <p>May 15, 2025</p>
            </div>
            <div className='Parent-Teacher_Conference-time'>
              <img src='./public/time-icon.svg' alt='time-icon.svg' />
              <p>4:00 PM - 7:00 PM</p>
            </div>
            <div className='Parent-Teacher_Conference-Location'>
              <img src='./public/Location-icon.svg' alt='Location-icon.svg' />
              <p>Main Building, Floor 2</p>
            </div>
          </div>
          <div className='Science_Fair'>
            <div className='Science_Fair-item'>
              <h1>Science Fair</h1>
            </div>
            <div className='Science_Fair-date'>
              <img src='./public/data-icon.svg' alt='data-icon.svg' />
              <p>May 20, 2025</p>
            </div>
            <div className='Science_Fair-time'>
              <img src='./public/time-icon.svg' alt='time-icon.svg' />
              <p>6:00 PM - 8:00 PM</p>
            </div>
            <div className='Science_Fair-Location'>
              <img src='./public/Location-icon.svg' alt='Location-icon.svg' />
              <p>School Gymnasium</p>
            </div>
          </div>
          <div className='End_of_Year_Concert'>
            <div className='End_of_Year_Concert-item'>
              <h1>End of Year Concert</h1>
            </div>
            <div className='End_of_Year_Concert-date'>
              <img src='./public/data-icon.svg' alt='data-icon.svg' />
              <p>June 5, 2025</p>
            </div>
            <div className='End_of_Year_Concert-time'>
              <img src='./public/time-icon.svg' alt='time-icon.svg' />
              <p>6:00 PM - 8:00 PM</p>
            </div>
            <div className='End_of_Year_Concert-Location'>
              <img src='./public/Location-icon.svg' alt='Location-icon.svg' />
              <p>School Auditorium</p>
            </div>
          </div>
          <div className='View_All_Events'>
            <h1>View All Events</h1>
            <img src='./public/View All Events Button.svg' alt='View All Events Button' />
          </div>
        </div>
        <div className='Photo_Gallery'>
          <div className='Photo_Gallery-text'>
            <h2>Photo Gallery</h2>
          </div>
          <div className='View_All_Photos'>
            <h1>View All Photos</h1>
            <img src='./public/View All Photos button.svg' alt='View All Photos button' />
          </div>
          <div className='Photo_Gallery_Students_in_classroom'>
            <img src="./public/Students in classroom.png" alt="Students in classroom.png" />
          </div>
          <div className='Photo_Gallery_labaratory_classroom'>
            <img src='./public/Science laboratory.png' alt='Scince Labaratory.png' />
          </div>
          <div className='Photo_Gallery_Sports_activities'>
            <img src='./public/Sports activities.png' alt='Sports activities.png' />
          </div>
          <div className='Photo_Gallery_School_events'>
            <img src='./public/Arts and crafts.png' alt='Arts and crafts.png' />
          </div>
          <div className='Photo_Gallery_Arts_and_crafts'>
            <img src='./public/Gallery_Arts_and_crafts.png' alt='Gallery_Arts_and_crafts.png' />
          </div>
          <div className='Photo_Gallery_school_library'>
            <img src='./public/School library.png' alt='School library.png' />
          </div>
        </div>
        <div className='footer'>
          <div className='footer-logo'>
            <img src='./public/logo.svg' alt='School Logo' />
          </div>
          <div className='footer-logo-h1'>
            <h1>40-mektep</h1>
          </div>
          <div className='footer-text'>
            <p>Providing quality education since 1998.
              Developing knowledge, creativity, and
              character.
            </p>
          </div>
          <div className='footer-socials'>
            <div className='footer-socials-Facebook'>
              <img src='./public/facebook.svg' alt='Facebook' />
            </div>
            <div className='footer-socials-Instagram'>
              <img src='./public/instagram.svg' alt='Instagram' />
            </div>
            <div className='footer-socials-Twitter'>
              <img src='./public/Twitter.svg' alt='Twitter' />
            </div>
            <div className='footer-socials-Quick_Links'>
              <h2>Quick Links</h2>
              <div className='footer-socials-Quick_Links_About_Us'>
                <a href='link'>About Us</a>
              </div>
              <div className='footer-socials-Quick_Links_Education'>
                <a href='link'>Education</a>
              </div>
              <div className='footer-socials-Quick_Links_News_Events'>
                <a href='link'>News & Events</a>
              </div>
              <div className='footer-socials-Quick_Links_Support'>
                <a href='link'>Support</a>
              </div>
              <div className='footer-socials-Quick_Links_Rules_Documents'>
                <a href='link'>Rules & Documents</a>
              </div>
            </div>
            <div className='footer-socials-Contact Us'>
              <div className='footer-socials-Contact_Us-text'>
                <h2>Contact Us</h2>
              </div>
              <div className='footer-socials-Contact_Us-address'>
                <img src='./public/Location-icon.svg' alt='Location-icon.svg' />
              </div>
              <div className='footer-socials-Contact_Us-address-text'>
                <p>ул. Школьная 123, Город, Страна</p>
              </div>
              <div className='footer-socials-Contact_Us-phone'>
                <img src='./public/phone icon.svg' alt='phone icon.svg' />
              </div>
              <div className='footer-socials-Contact_Us-phone-text'>
                <p>+1 234 567 890</p>
              </div>
              <div className='footer-socials-Contact_Us-email'>
                <img src='./public/email icon.svg' alt='email icon.svg' />
              </div>
              <div className='footer-socials-Contact_Us-email-text'>
                <p>info@schoolname.edu</p>
              </div>
            </div>
            <div className='footer-socials-Newsletter'>
              <h2>Newsletter</h2>
            </div>
            <div className='footer-socials-Newsletter-text'>
              <p>Subscribe to our newsletter to receive updates
                and news.
              </p>
            </div>
            <div className='footer-socials-Newsletter-input'>
              <input type='email' placeholder='Your email address' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;