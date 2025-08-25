import { Link } from 'react-router-dom'
import './sidebar.css'
const Sidebar = () => {
    return (
        <div className='admin-sidebar'>
            <ul>
                <li><Link to='users'>Users</Link></li>
                <li><Link to='album'>Album</Link></li>
                <li><Link to='news'>News</Link></li>
                <li><Link to='profile'>Profile</Link></li>
                <li><Link to='employee'>Employee</Link></li>
                <li><Link to='Document'>Document</Link></li>
                <li><Link to='main'>Main</Link></li>
                <li><Link to='rule'>Rule</Link></li>
                <li><Link to='value'>Value</Link></li>
                <li><Link to='club'>Club</Link></li>
                <li><Link to='faq'>FAQ</Link></li>
                <li><Link to='schoolhours'>schoolhours</Link></li>
                <li><Link to='target'>Target</Link></li>
                <li><Link to='history'>history</Link></li>
                <li><Link to='information'>information</Link></li>
                <li><Link to='vacancy'>vacancy</Link></li>
                <li><Link to='schedule'>schedule</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
