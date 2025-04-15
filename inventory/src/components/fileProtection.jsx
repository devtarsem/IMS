import './../styles/add_sec.css'
import './../utils/util.css'
import {useState, useEffect, createRef} from 'react'
import { storage } from './../firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { getAuth } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth';
import {auth, provider} from './../firebase';
import secretStore from '../store/newSecretStore';
import {Link} from 'react-router'

function FileProtect(){

    const [fileUpdate, setFileUpdate] = useState();
    const password = createRef();
    const [fileRef, setFileRef] = useState('')
    function onFileUpload(el){
        const file = el.target.files[0];
        console.log(file)
        setFileUpdate(file);
    }
    const {protectingFile, returnToInitialState,isLoadingForProtectFFle, uploadedFileData,protectedFileReady} = secretStore()

    function protectandUploadFile(){
        const email = JSON.parse(localStorage.getItem('auth')).email;
        protectingFile(fileUpdate, password.current.value, email);
    }

    function returnToInitialStateFun(){
        returnToInitialState();
    }

    return(
        <div className='docs'>
            {!isLoadingForProtectFFle &&
                <div className='grid grid-2-col gap16'>
                    <input ref={password} className='inp inp__' placeholder='File passworrd'/>
                    <div className='uploadfile flex flex-2'>
                        {/* <label onChange={onFileUpload} className='filelabel' for='file'>Upload file</label> */}
                        <input onChange={onFileUpload} type='file' name='file' id='file_'/>
                    </div>
                    <button onClick={protectandUploadFile} className='makeDoc btn'>Protect file</button>
                </div>
            }
            {isLoadingForProtectFFle &&
                <div className='waitingForLoad'>
                    {!protectedFileReady &&
                     <div className='loader'></div>
                    }
                    {protectedFileReady &&
                        <div className='ready flex flex-dir flex-2 gap16'>
                            <h2 className='head2 head2_'>Your file is ready, share now.</h2>
                            <Link
                                to={`/protect/${uploadedFileData.id}/${uploadedFileData.identifier}}`}
                                className="linkpreview"
                                >
                                Preview link / share
                            </Link>
                            <button onClick={returnToInitialStateFun} className='btn'>Protect new file +</button>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default FileProtect;