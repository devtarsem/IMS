import './../styles/mysecrets.css'
import './../utils/util.css'
import AllSensitiveData from './allSensitiveData';
import AllprotectedFiles from './allProtectedFiles';
import {useState, useEffect} from 'react';
import mySecretStore from '../store/mysecret';
import AuthCheck from './authLayerCheck';
import './../styles/media.css'


function MySecrets(){

    const {showSensitiveDataPanel, isLoading, fetchingAllTheProtectedFiles,openDataPanelAndCloseFilePanel, closeSensitiveDataPanelAndOpenFilePanel} = mySecretStore()

    useEffect(el=>{
        fetchingAllTheProtectedFiles();
    }, [])

    function openFilePanel(){
        closeSensitiveDataPanelAndOpenFilePanel();
    }

    function openDataPanel(){
        openDataPanelAndCloseFilePanel();
    }

    return(
        <div className='mysecrets flex flex-dir gap16 pad16'>
            <AuthCheck/>
            <h2 className='head2 head2_ decenter'>Your secrets</h2>
            <div className='flex gap16'>
                <button onClick={openDataPanel} className='btn'>Sensitive data</button>
                <button onClick={openFilePanel} className='btn'>Protected files</button>
            </div>
            <hr/>
            {isLoading ?
                <div className='flex flex-dir gap16 flex-2'>
                    <div className='loader'></div>
                    <p className='wait'>wait your files is laoding</p>
                </div>
            :
                <div className='sensitiveData pad16'>
                    {showSensitiveDataPanel &&
                        <AllSensitiveData/>
                    }
                    {!showSensitiveDataPanel &&
                        <AllprotectedFiles/>
                    }
                </div>
            }
            {/* <div className='pagination flex flex-1'>
                <button className='prevnext'>&larr; Prev</button>
                <div className='flex flex-2 gap32'>
                    {[1,2,3,4,5,6].map(el=>
                        <p className='nou'>{el}</p>
                    )}
                </div>
                <button className='prevnext'> Next &rarr;</button>

            </div> */}

        </div>
    )
}

export default MySecrets;