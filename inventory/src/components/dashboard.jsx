import './../styles/dashboard.css'
import './../utils/util.css'
import iven from './../icon/iven.png'
import home from './../icon/home.png'
import padlock from './../icon/padlock.png'
import spy from './../icon/spy.png'
import status from './../icon/status.png'
import setting from './../icon/setting.png'
import imports from './../icon/import.png'
import logout from './../icon/logout1.png'
import { Outlet } from 'react-router'


import { Link } from 'react-router'

function Dashboard(){
    return(
        <div className="dashboard grid grid-15-col">
            <div className='navs flex flex-dir gap32 pad16'>
                <h2 className='head2'>SecMore</h2>
                <Link to='/home' className='navlink btn flex flex-3 gap8'>
                    <img src={home} className='icon' alt='icons'/>
                    <p className='name_'>Home</p>
                </Link>
                <Link to='/' className='navlink btn flex flex-3 gap8'>
                    <img src={padlock} className='icon' alt='icons'/>
                    <p className='name_'>+ New secret</p>
                </Link>
                <Link to='/' className='navlink btn flex flex-3 gap8'>
                    <img src={spy} className='icon' alt='icons'/>
                    <p className='name_'>My secrets</p>
                </Link>
                <Link to='/' className='navlink btn flex flex-3 gap8'>
                    <img src={status} className='icon' alt='icons'/>
                    <p className='name_'>Activity</p>
                </Link>
                <Link to='/' className='navlink btn flex flex-3 gap8'>
                    <img src={setting} className='icon' alt='icons'/>
                    <p className='name_'>Settings</p>
                </Link>
                <Link to='/' className='navlink btn flex flex-3 gap8'>
                    <img src={imports} className='icon' alt='icons'/>
                    <p className='name_'>Exports</p>
                </Link>
                <Link to='/' className='navlink btn flex flex-3 gap8'>
                    <img src={logout} className='icon' alt='icons'/>
                    <p className='name_'>Logout</p>
                </Link>
            </div>
            <div className='display pad16'>
                <Outlet/>
            </div>
        </div>
    )

}

export default Dashboard;