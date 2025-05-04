import './../styles/setting.css'
import './../utils/util.css'
import settingStore from '../store/settingsStore';
import { useEffect, useState , createRef} from 'react';
import edit from './../icon/edit.png'
import check from './../icon/check.png'
import close from './../icon/close.png'
import Error from './error';
import AuthCheck from './authLayerCheck';
import './../styles/media.css'


function Setting(){

    const {userCreds, SettingError,settingErrorMsg, settingErroTrue,fetchingUserCreds, renameTheUsername,changeUsername, closeUsernameResetOption,openUsernameResetOption} = settingStore();
    useEffect(el=>{
        fetchingUserCreds();
    }, [])

    const name = createRef();

    function OpenUserNameEditFrame(){
        openUsernameResetOption();
    }

    function CloseUserNameEditFrame(){
        closeUsernameResetOption();
    }

    function renameName(){
        if(name.current.value.trim() === ''){
            settingErroTrue("Please provide valid name")
            return;
        }
        renameTheUsername(name.current.value)
    }

    return(
        <div className="setting pad16 flex flex-dir gap16">
            <AuthCheck/>
            {SettingError &&
                <Error msg={settingErrorMsg}/>
            }
            <div className='flex flex-1'>
                <h1 className='head2 head2_ decenter'>Settings</h1>
                {/* <button className=' logoutBtn'>Logout</button> */}
            </div>
            <hr/>
            <div className='accCreds flex flex- flex-dir gap32'>
                <h2 className='creds'>Account credentials</h2>
                <p className='emailAcc'>Registeration code : - <span>{userCreds.id}</span></p>
                <p className='emailAcc'>Email : - <span>{userCreds.email}</span></p>
                {changeUsername &&
                    <div className='grid grid-3-col gap16'>
                        <div className='didid flex flex-2 gap16'>
                            <input ref={name} type='type' placeholder='Username' className='inp__ inputReset'/>
                            <button onClick={renameName} className='btnof'>
                                <img src={check} className='edit resetIcons'alt='edit'/>
                            </button>
                            <button onClick={CloseUserNameEditFrame} className='btnof'>
                                <img src={close} className='edit resetIcons'alt='close'/>
                            </button>
                        </div>
                    </div>
                }
                {!changeUsername &&
                    <div className='flex flex-3 gap16'>
                        <p className='emailAcc'>Username : - <span>{userCreds.name}</span></p>
                        <button onClick={OpenUserNameEditFrame} className='editbtn'>
                            <img src={edit} className='edit'alt='edit'/>
                        </button>
                    </div>
                }
                <p className='emailAcc'>Status : - <span>{userCreds.verify ? 'Verified successfully': 'not verified'}</span></p>
            </div>
        </div>
    )
}

export default Setting;