import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import ContentMain from './Content';


const Dashboard = () => {
    return (
        <div className=''>
            <div className=''>
                <Header/>
            </div>
            <div className=''>
                <Sidebar/>
            </div>
            <div className=''>
                <ContentMain/>
            </div>
        </div>
    )
}
export default Dashboard;