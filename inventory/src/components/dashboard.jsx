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
import {useState} from 'react'

function Dashboard(){

    const [navNumber, setNavNumber] = useState(0);

    function HomeSet(){
        setNavNumber(1);
    }
    function newSecSet(){
        setNavNumber(2);
    }
    function MySecSet(){
        setNavNumber(3);
    }
    function ActiSet(){
        setNavNumber(4);
    }
    function SettingSet(){
        setNavNumber(5);
    }
    function ExportSet(){
        setNavNumber(6);
    }
    function LogoutSet(){
        setNavNumber(7);
    }


    return(
        <div className="dashboard grid grid-15-col">
            <div className='navs flex flex-dir gap32 pad16'>
                <h2 className='head2'>SecMore</h2>
                <Link onClick={HomeSet} to='/home' className={ navNumber===1 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                    <img src={home} className='icon' alt='icons'/>
                    <p className='name_'>Home</p>
                </Link>
                <Link onClick={newSecSet} to='/secret' className={ navNumber===2 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                    <img src={padlock} className='icon' alt='icons'/>
                    <p className='name_'>+ New secret</p>
                </Link>
                <Link onClick={MySecSet} to='/my-secret' className={ navNumber===3 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                    <img src={spy} className='icon' alt='icons'/>
                    <p className='name_'>My secrets</p>
                </Link>
                <Link onClick={ActiSet} to='/sec-share' className={ navNumber===4 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                    <img src={status} className='icon' alt='icons'/>
                    <p className='name_'>SecMore share</p>
                </Link>
                <Link onClick={SettingSet} to='/' className={ navNumber===5 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                    <img src={setting} className='icon' alt='icons'/>
                    <p className='name_'>Settings</p>
                </Link>
                {/* <Link onClick={ExportSet} to='/exports' className={ navNumber===6 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                    <img src={imports} className='icon' alt='icons'/>
                    <p className='name_'>Exports</p>
                </Link> */}
                <Link onClick={LogoutSet} to='/' className={ navNumber===7 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
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