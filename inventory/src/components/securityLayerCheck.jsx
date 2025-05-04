import './../styles/seccheck.css'
import './../utils/util.css'
import {createRef} from 'react';
import './../styles/media.css'

import mySecretStore from '../store/mysecret';

function SecurityLayerCheck(){

    const {checkingPassword, wrongPasswordMsg, downTheWorngPaswordMsg} = mySecretStore();

    const password = createRef();

    function verifyNow(){
        checkingPassword(password.current.value);
    }

    function inputTrack(){
        downTheWorngPaswordMsg(password.current.value)
    }

    return(
        <div className="layerCheck flex flex-2">
            <div className='PanelOfCheck pad16 flex flex-dir gap16 flex-2'>
                <p className='invalid'>{wrongPasswordMsg}</p>
                <h2 className='head2 head2_'>Entre security key first</h2>
                <label className='label'>Entre your security key</label>
                <input onChange={inputTrack} ref={password} className='inp__' placeholder='************' type ='password'/>
                <button onClick={verifyNow} className='btn smaltbn'>verify now!</button>
            </div>
        </div>
    )
}

export default SecurityLayerCheck