import './../styles/dashboard.css'
import './../styles/media.css'

import './../utils/util.css'
import iven from './../icon/iven.png'
import home from './../icon/home.png'
import padlock from './../icon/padlock.png'
import spy from './../icon/spy.png'
import status from './../icon/status.png'
import setting from './../icon/setting.png'
import imports from './../icon/import.png'
import logout from './../icon/logout1.png'
import { Outlet, useLocation  } from 'react-router'
import homeimg from './../icon/homeimg.svg'
import { Link } from 'react-router'
import {useState, useEffect} from 'react'
import lock from './../icon/lock.png';
import homestore from '../store/homeStore'
import menu from './../icon/menu.png'
import dahStore from '../store/dashStore'
import cross from './../icon/close.png'

function Dashboard(){

    const [navNumber, setNavNumber] = useState(0);
    const location = useLocation();
    const hiddenRoutes = ['/dashboard/home', '/dashboard/secret', '/dashboard/my-secret', '/dashboard/sec-share', '/dashboard/setting'];
    const shouldHideContent = hiddenRoutes.some(route =>
        location.pathname.startsWith(route)
      );
    
    const {unLockAllNav, cacheunlockNav} = homestore();

    // const [opennav, setOpenNav] = useState(false);

    const {openNavsMini,setOpenNav, setCloseNav } = dahStore()

    useEffect(el=>{
        cacheunlockNav();
       

    }, [])
      
    function reset(){
        setNavNumber(0);
    }
    function HomeSet(){
        setNavNumber(1);
        setCloseNav();
    }
    function newSecSet(){
        setNavNumber(2);
        setCloseNav();

    }
    function MySecSet(){
        setNavNumber(3);
        setCloseNav();

    }
    function ActiSet(){
        setNavNumber(4);
        setCloseNav();

    }
    function SettingSet(){
        setNavNumber(5);
        setCloseNav();

    }
    function ExportSet(){
        setNavNumber(6);
        setCloseNav();

    }
    function LogoutSet(){
        setNavNumber(7);
        setCloseNav();

    }
    function OpenNavMini(){
        setOpenNav();
    }

    function closeNavMini(){
        setCloseNav();

    }


    return(
        <div className="dashboard grid grid-15-col">
            {openNavsMini &&
                <div className='mininav pad16 flex flex-dir gap16'>
                    <Link onClick={reset} to='/' className='navlink btn flex flex-3 gap8'>
                        <h2 className='head2'>SecMore</h2>
                    </Link>
                    <Link onClick={HomeSet} to={'home'} className={ navNumber===1 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                        
                        <img src={home} className='icon' alt='icons'/>
                        <p className='name_'>Home</p>
                    </Link>
                    <Link onClick={newSecSet}to={unLockAllNav?'secret': 'home'} className={ navNumber===2 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'} >
                        {unLockAllNav ?
                            <img src={padlock} className='icon' alt='icons'/>
                            :
                            <img src={lock} className='icon' alt='icons'/>
                        }
                        <p className='name_'>+ New secret</p>
                    </Link>
                    <Link onClick={MySecSet} to={unLockAllNav?'my-secret': 'home'} className={ navNumber===3 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                        
                        {unLockAllNav ?
                            <img src={spy} className='icon' alt='icons'/>
                            :
                            <img src={lock} className='icon' alt='icons'/>
                        }
                        <p className='name_'>My secrets</p>
                    </Link>
                    <Link onClick={ActiSet} to={unLockAllNav?'sec-share': 'home'} className={ navNumber===4 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                        {unLockAllNav ?
                            <img src={status} className='icon' alt='icons'/>
                            :
                            <img src={lock} className='icon' alt='icons'/>
                        }
                        <p className='name_'>SecMore share</p>
                    </Link>
                    <Link onClick={SettingSet} to={unLockAllNav?'setting': 'home'} className={ navNumber===5 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                        {unLockAllNav ?
                            <img src={setting} className='icon' alt='icons'/>
                            :
                            <img src={lock} className='icon' alt='icons'/>
                        }
                        <p className='name_'>Settings</p>
                    </Link>
                    {/* <Link onClick={ExportSet} to='/exports' className={ navNumber===6 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                        <img src={imports} className='icon' alt='icons'/>
                        <p className='name_'>Exports</p>
                        </Link> */}
                    {/* <Link onClick={LogoutSet} to='/' className={ navNumber===7 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                        <img src={logout} className='icon' alt='icons'/>
                        <p className='name_'>Logout</p>
                        </Link> */}
                </div>
            }

            {!openNavsMini &&
                <button onClick={OpenNavMini} className='mininavbarBtn' >
                    <img src={menu} className='menybtnicon' alt='menu'/>
                </button>
            }

            {openNavsMini &&
                <button onClick={closeNavMini} className='mininavbarBtn' >
                    <img src={cross} className='menybtnicon closeioconmeu' alt='menu'/>
                </button>
            }

            <div className='navs flex flex-dir gap32 pad16'>
                <Link onClick={reset} to='/' className='navlink btn flex flex-3 gap8'>
                    <h2 className='head2'>SecMore</h2>
                </Link>
                <Link onClick={HomeSet} to={'home'} className={ navNumber===1 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                    
                    <img src={home} className='icon' alt='icons'/>
                    <p className='name_'>Home</p>
                </Link>
                <Link onClick={newSecSet}to={unLockAllNav?'secret': 'home'} className={ navNumber===2 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'} >
                    {unLockAllNav ?
                        <img src={padlock} className='icon' alt='icons'/>
                    :
                        <img src={lock} className='icon' alt='icons'/>
                    }
                    <p className='name_'>+ New secret</p>
                </Link>
                <Link onClick={MySecSet} to={unLockAllNav?'my-secret': 'home'} className={ navNumber===3 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                    
                    {unLockAllNav ?
                        <img src={spy} className='icon' alt='icons'/>
                    :
                        <img src={lock} className='icon' alt='icons'/>
                    }
                    <p className='name_'>My secrets</p>
                </Link>
                <Link onClick={ActiSet} to={unLockAllNav?'sec-share': 'home'} className={ navNumber===4 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                    {unLockAllNav ?
                        <img src={status} className='icon' alt='icons'/>
                    :
                        <img src={lock} className='icon' alt='icons'/>
                    }
                    <p className='name_'>SecMore share</p>
                </Link>
                <Link onClick={SettingSet} to={unLockAllNav?'setting': 'home'} className={ navNumber===5 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                    {unLockAllNav ?
                        <img src={setting} className='icon' alt='icons'/>
                    :
                        <img src={lock} className='icon' alt='icons'/>
                    }
                    <p className='name_'>Settings</p>
                </Link>
                {/* <Link onClick={ExportSet} to='/exports' className={ navNumber===6 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                    <img src={imports} className='icon' alt='icons'/>
                    <p className='name_'>Exports</p>
                </Link> */}
                {/* <Link onClick={LogoutSet} to='/' className={ navNumber===7 ? 'navlink backgd btn flex flex-3 gap8' : 'navlink btn flex flex-3 gap8'}>
                    <img src={logout} className='icon' alt='icons'/>
                    <p className='name_'>Logout</p>
                </Link> */}
            </div>
            <div className='display '>
                {!shouldHideContent &&
                    (<div className='layOut flex flex-2 flex-dir'>
                        <img src={homeimg} className='homeimg' alt='banner'/>
                        <h1 className='head2 head2_ spanofhome'>Send securely with <span>SecMore</span></h1>
                    </div>)
                }
                <Outlet/>
            </div>
        </div>
    )

}

export default Dashboard;