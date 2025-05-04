import ReactJson from 'react-json-view';
import 'jsoneditor-react/es/editor.min.css';
import share from './../icon/share.png'
import mark from './../icon/mark.png'
import del from './../icon/del.png'
import close from './../icon/close.png'
import {createRef} from 'react'
import './../styles/media.css'

import mySecretStore from '../store/mysecret';
import SecurityLayerCheck from './securityLayerCheck';
import { Link } from 'react-router';

function AllSensitiveData(){

    const {deleteHashSensitiveData, closeFailedBookMarkPopUp, settingMySecretErroTrue,bookMarkFailed, receivingSensitiveDataFromBackend, bookMarksenitiveData,descryptPassword,decryptButtonSystem,closeSecurityPanel, showSecurotuLayerPanel, securityPanelANDDe_cyption} = mySecretStore();
    console.log(receivingSensitiveDataFromBackend)

    function DecryptDataSecurityCheckFirst(){
        securityPanelANDDe_cyption();
    }

    function DecryptData(event,el){
        console.log(el)
        descryptPassword(el, receivingSensitiveDataFromBackend);
    }

    function closeSecPanel(){
        closeSecurityPanel();
    }

    function BookmarkData(event, el){
        bookMarksenitiveData(el.identifier, el.jsonString);
    }

    function bookMarkedPopClose(){
        closeFailedBookMarkPopUp()
    }

    function deleteHashSensitive(event, el){
        deleteHashSensitiveData(el.identifier)
    }

    return(
        <div className="allSensitiveData flex flex-dir gap16 pad16">

            <div className={bookMarkFailed ? 'FailedBookmark flex flex-2 gap16' : 'FailedBookmark failedConceev flex flex-2 gap16'}>
                <p className='already'>This code is already bookmarked</p>
                <button onClick={bookMarkedPopClose} className='closebtn'>
                    <img src={close} className='icon_closing' alt='close'/>
                </button>
            </div>

            {showSecurotuLayerPanel &&
                <button onClick={closeSecPanel} className='closePanel'>
                    <img src={close} alt='close button' className='closeIcon'/>
                </button>
            }
            {showSecurotuLayerPanel &&
                <SecurityLayerCheck/>
            }
            <h3 className='head3'>Your secret data</h3>
            <div className='dataaa flex flex-dir gap16'>
                {receivingSensitiveDataFromBackend.map(el=>
                    <>
                        <div className="dataContainer flex flex-dir gap8">
                            <div className='sesidata flex flex-1'>
                                <div className='ids flex gap16 flex-dir'>
                                    <p className='keys' >Hash key : - <span>{el.hashKey.slice(0,5)}.......</span></p>
                                    <p className='keys' >Identity mark : - <span>{el._id}</span></p>
                                </div>

                                <div className='sensispots flex flex-2 gap16'>
                                    {!decryptButtonSystem &&
                                        <button onClick={DecryptDataSecurityCheckFirst} className='descrptData btn'>Verify password to de-crypt</button>
                                    }
                                    {decryptButtonSystem &&
                                        <button onClick={(event)=> DecryptData(event, el)} className='descrptData btn'>De-crypt now!</button>
                                    
                                    }
                                    <Link to={`/secure/${el.jsonString}/${el.iv}`} className='visit link'>
                                        <img src={share} className='icon_share' alt='share'/>
                                    </Link>
                                    <button onClick={(event)=> BookmarkData(event, el)} className='shareBtn '>
                                        <img src={mark} className='icon_share' alt='share'/>
                                    </button>
                                    <button onClick={(event)=> deleteHashSensitive(event, el)} className='shareBtn '>
                                        <img src={del} className='icon_share' alt='share'/>
                                    </button>
                                </div>
                            </div>
                            <div style={{ width: '100%', height: '15rem', overflowY: 'auto', padding: '1rem', border: '0.1rem solid var(--color-second)', borderRadius: '0.1rem' }}>
                                <ReactJson
                                    src={{Encrypted_string : el.jsonString}}
                                    theme="monokai" // or "bright:inverted" etc.
                                    style={{ fontSize: '16px' }}
                                    collapsed={false}
                                    displayDataTypes={false}
                                    enableClipboard={true}
                                    />
                            </div>
                        </div>
                        <hr/>
                    </>
                )}
            </div>
        </div>
    )
}


export default AllSensitiveData;