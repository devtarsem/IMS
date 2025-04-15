import './../styles/link.css'
import './../utils/util.css'
import { useParams } from 'react-router';
import ReactJson from 'react-json-view';
import 'jsoneditor-react/es/editor.min.css';
import linkstore from '../store/linkStore';
import { createRef, useEffect } from 'react';

function ShareLink(){

    const params = useParams();
    console.log(params)
    const {passwordStatus, lock,settingPasswordAndDecrypting, clearingDataAfterOncevisited,contentToDisplay} = linkstore();
    const passwordRef = createRef();

    function AddPaswordAndDecrypt(){
        settingPasswordAndDecrypting(passwordRef.current.value, params.id, params.iv);
    }

    useEffect(el=>{
        if(localStorage.getItem(`${params.id}`)){
            params.id = 'visited';                
        }
    }, [])

    return(
        <div className="sharelink pad16 flex flex-dir flex-2 gap16">
            <h2 className='head2 head2_'>Here is your data</h2>
            <p className='descclaimer'><span>Note* &mdash;</span> The data will be erased one file closed</p>
            <div className='decrypt flex flex-2'>
                <input ref={passwordRef} className='inp__' placeholder='passowrd' type='password'/>
                <button onClick={AddPaswordAndDecrypt} className='btn'>Add password</button>
            </div>
            {passwordStatus ?
                <div style={{ width: '100%', height: '20rem', overflowY: 'auto', padding: '1rem', border: '0.1rem solid var(--color-second)', borderRadius: '0.1rem' }}>
                    <ReactJson
                        src={{ "data" : contentToDisplay}}
                        theme="monokai" // or "bright:inverted" etc.
                        style={{ fontSize: '16px' }}
                        collapsed={false}
                        displayDataTypes={false}
                        enableClipboard={true}
                        />
                </div>
                :
                <div className='noPassword'>
                    <p className='desclaimer2'>Please provide the security key to see data</p>
                </div>
                }
            {lock &&
                <p className='protect'>This is protected file you already fetched the data once <br/> now it is unaccessable request new link from sender</p>
            }
        </div>
    )
}

export default ShareLink;