import './../styles/error.css'
import './../utils/util.css'
import close from './../icon/close.png'
import homestore from '../store/homeStore'
import secretStore from '../store/newSecretStore'
import settingStore from '../store/settingsStore'
import './../styles/media.css'

function Error(props){

    const {settingHomeErrorFalse} = homestore();
    const {settingNewSecretErroFalse} = secretStore();
    const {settingErrorFalse} = settingStore();

    function closeError(){
        settingHomeErrorFalse()
        settingNewSecretErroFalse()
        settingErrorFalse()
    }

    return(
        <div className="error flex flex-2 gap16">
            <p className='err' >{props.msg}</p>
            <button onClick={closeError} className='closerBtn'>
                <img src={close} alt='close' className='close__err'/>
            </button>
        </div>
    )
}

export default Error;