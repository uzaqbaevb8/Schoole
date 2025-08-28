import { Link } from 'react-router-dom'
import './sidebar.css'
import {
    School,
    MapPin,
    Users,
    Images,
    Newspaper,
    User,
    IdCardLanyard,
    FileText,
    House,
    Scale,
    ChartCandlestick,
    Club,
    TableOfContents,
    Clock7,
    Target,
    History,
    BookOpenText,
    BriefcaseBusiness,
    CalendarCheck
} from 'lucide-react';
const Sidebar = () => {
    return (
        <div className='admin-sidebar'>
            <ul>
                <li><School /><Link to='school'>School</Link></li>
                <li><MapPin /><Link to='position'>Position</Link></li>
                <li><Users /><Link to='users'>User</Link></li>
                <li><Images /><Link to='album'>Album</Link></li>
                <li><Newspaper /><Link to='news'>News</Link></li>
                <li><User /><Link to='profile'>Profile</Link></li>
                <li><IdCardLanyard /><Link to='employee'>Employee</Link></li>
                <li><FileText /><Link to='Document'>Document</Link></li>
                <li><House /><Link to='main'>Main</Link></li>
                <li><Scale /><Link to='rules'>Rules</Link></li>
                <li><ChartCandlestick /><Link to='value'>Value</Link></li>
                <li><Club /><Link to='club'>Club</Link></li>
                <li><TableOfContents /><Link to='faq'>FAQ</Link></li>
                <li><Clock7 /><Link to='schoolhours'>Schoolhours</Link></li>
                <li><Target /><Link to='target'>Target</Link></li>
                <li><History /><Link to='history'>History</Link></li>
                <li><BookOpenText /><Link to='information'>Information</Link></li>
                <li><BriefcaseBusiness /><Link to='vacancy'>Vacancy</Link></li>
                <li><CalendarCheck /><Link to='schedule'>Schedule</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
