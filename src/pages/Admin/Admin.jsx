import { Outlet } from "react-router-dom"
import Header from "../../components/admin/header/header"
import Sidebar from "../../components/admin/sidebar/sidebar"
import './Admin.css'

const Admin = () => {
    return (
        <div className="main-admin">
            <Header />
            <div className="main-admin-inner">
                <Sidebar />
                <div className="main-admin-outlet">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Admin
