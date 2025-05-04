import './../styles/protected.css'
import './../utils/util.css'
import { useParams , useLocation} from 'react-router-dom';
import newSecretStore from '../store/newSecretStore';
import {createRef, useEffect} from 'react';
import './../styles/media.css'


function ProtectedFileViewer(){

    const { id, identifier } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const url = queryParams.get("url");
    const password = createRef();

    const {passwordPassingToBAckendToPenFile, providedUrlFromBackend} = newSecretStore();

    function checkingPassword(){
        passwordPassingToBAckendToPenFile(password.current.value, id, identifier.replace("}", ""));
    }


    return(
        <div className="fileviewer pad16 flex flex-2 flex-dir gap16">
            <h2 className='head2 head2_'>Fill password to see the protected file</h2>
            <div className='prtefileinp flex flex-2 passcheck'>
                <input ref={password} className='inp__' placeholder='password' type='password'/>
                <button onClick={checkingPassword} className='btn'>Show my file</button>
            </div>
            <div className='fileViewerFile'>
                {providedUrlFromBackend == ' ' ?
                    <div className='passwordfirst'>
                        <p className='pas'>Provide password to see file</p>
                    </div>
                : 
                
                    <a href={`${providedUrlFromBackend}`}  className='btn' >Click here to see your file</a>
                }
            </div>
        </div>
    )
}

export default ProtectedFileViewer;