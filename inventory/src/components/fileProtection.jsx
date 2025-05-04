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
import './../styles/media.css'


function FileProtect(){

    const [fileUpdate, setFileUpdate] = useState();
    const password = createRef();
    const [fileRef, setFileRef] = useState('')
    function onFileUpload(el){
        const file = el.target.files[0];
        console.log(file)
        setFileUpdate(file);
    }
    const {protectingFile, returnToInitialState, paswordCounter,displayCounterNumberOfkeysInPassword,settingNewSecretErroTrue, isLoadingForProtectFFle, uploadedFileData,protectedFileReady} = secretStore()

    function protectandUploadFile(){
        if(password.current.value.length < 8){
            settingNewSecretErroTrue('The password must be off 8 digit long');
            return;
        }

        if(!fileUpdate){
            settingNewSecretErroTrue('please select appropriate file');
            return;
        }
        const email = JSON.parse(localStorage.getItem('auth')).email;
        protectingFile(fileUpdate, password.current.value, email);
    }

    function returnToInitialStateFun(){
        returnToInitialState();
    }

    function countPassoerdKeys(){
        displayCounterNumberOfkeysInPassword(password.current.value)
    }

    return(
        <div className='docs'>
            {!isLoadingForProtectFFle &&
                <div className='formofprotectdocs grid grid-2-col gap16'>
                    <div className='flex flex-dir'>
                        <p className='len'>{paswordCounter}/8</p>
                        <input onChange={countPassoerdKeys} ref={password} className={paswordCounter < 8 ? 'inp__ redbg' : 'inp__ greenbg'} placeholder='File passworrd'/>
                    </div>
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
                    <div className='flex flex-2 flex-dir gap16'>
                        <div className='loader'></div>
                        <p className='wait'>Please wait you files are being processed</p>
                    </div>
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