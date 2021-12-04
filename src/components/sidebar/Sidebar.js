import "./Sidebar.css";
import logo from '../../assets/logoEstiam.jpg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img width="250" src={logo} alt="logo"/>
                </div>
                <i 
                    className="fa fa-times"
                    id="sidebarIcon"
                    onClick={() => closeSidebar()}>
                    </i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2> MANAGEMENT </h2>
                <div className="sidebar__link"> 
                    <i className="fa fa-user-secret"></i>
                    <a href="#">Admin Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Company Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Employee Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">WareHouse</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake"></i>
                    <a href="#">Contracts</a>
                </div>
               <h2> Log Out </h2>
                <div className="sidebar__link">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Deconnexion</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;