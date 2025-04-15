import ReactJson from 'react-json-view';
import 'jsoneditor-react/es/editor.min.css';
import share from './../icon/share.png'
import mark from './../icon/mark.png'
import del from './../icon/del.png'
import close from './../icon/close.png'
import {createRef} from 'react'

import mySecretStore from '../store/mysecret';
import SecurityLayerCheck from './securityLayerCheck';

function AllSensitiveData(){

    const {receivingSensitiveDataFromBackend, descryptPassword,decryptButtonSystem,closeSecurityPanel, showSecurotuLayerPanel, securityPanelANDDe_cyption} = mySecretStore();


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

    return(
        <div className="allSensitiveData flex flex-dir gap16">
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
                            <div className='flex flex-1'>
                                <div className='ids flex gap16 flex-dir'>
                                    <p className='keys' >Hash key : - <span>{el.hashKey}</span></p>
                                    <p className='keys' >Identity mark : - <span>{el._id}</span></p>
                                </div>

                                <div className='flex flex-2 gap16'>
                                    {!decryptButtonSystem &&
                                        <button onClick={DecryptDataSecurityCheckFirst} className='descrptData btn'>Verify password to de-crypt</button>
                                    }
                                    {decryptButtonSystem &&
                                        <button onClick={(event)=> DecryptData(event, el)} className='descrptData btn'>De-crypt now!</button>
                                    
                                    }
                                    <button className='shareBtn '>
                                        <img src={share} className='icon_share' alt='share'/>
                                    </button>
                                    <button className='shareBtn '>
                                        <img src={mark} className='icon_share' alt='share'/>
                                    </button>
                                    <button className='shareBtn '>
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