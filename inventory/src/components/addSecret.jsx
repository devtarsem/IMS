import './../styles/add_sec.css'
import './../utils/util.css'
import ReactJson from 'react-json-view';
import 'jsoneditor-react/es/editor.min.css';
import { JsonEditor as Editor } from 'jsoneditor-react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import { useState, createRef } from 'react';
import secretStore from '../store/newSecretStore';
import { Link } from 'react-router';

import FileProtect from './fileProtection';

function AddSecret(){


    const [openPass, setOpenpass] = useState(true);
    const [openDocs, setOpenDocs] = useState(false);
    const [jsondata, setJsonData] = useState({"greeting" : "hello"})
    
    const {sendingDataOfJSonPassword, sendingCredentialsToReceiverViaMail,iv,encryptedFile,fileEncryptionDone, isLoading} = secretStore()
    const secret_key = createRef()

    const handleJsonChange = (e)=>{
        console.log(e);
        if(e.updated_src){
            setJsonData(e.updated_src);
        }else if(e.new_value && e.name){
            setJsonData(e.updated_src)
        }else if(e.existing_value !== undefined){
            setJsonData(e.updated_src)
        }
    }

    const prepsTheJsonFinalize = ()=>{
        console.log(JSON.stringify(jsondata));
        sendingDataOfJSonPassword({secret : secret_key.current.value, file : JSON.stringify(jsondata)})
    }

    function PassState(){
        setOpenpass(openPass=> !openPass);
        setOpenDocs(openDocs=> false);
    }

    function DocState(){
        setOpenpass(openPass=> false);
        setOpenDocs(openDocs=> !openDocs);
    }

    function Sharing(){
        sendingCredentialsToReceiverViaMail({
            link : `{http://localhost:5173/secure/${encryptedFile}/${iv}}`,
            pssword : 'fsdfsdfsdfsdfsdf'
        })
    }

    return(
        <div className='secret flex flex-dir gap16'>
            <h2 className='head2 head2_ decenter'>Send sensitive data securily</h2>
            <div className='flex gap16'>
                <button onClick={PassState} className='btn'>Generate password links</button>
                <button onClick={DocState} className='btn'>Lock documents</button>
                <button className='btn'>Share via SecMore</button>
            </div>
            <hr/>
            {openPass &&
                <>
                    {(!isLoading) &&
                        <>
                            <div style={{ width: '100%', height: '30rem', overflowY: 'auto', padding: '1rem', border: '0.1rem solid var(--color-second)', borderRadius: '0.1rem' }}>
                                <ReactJson
                                    src={jsondata}
                                    theme="monokai" // or "bright:inverted" etc.
                                    style={{ fontSize: '16px' }}
                                    collapsed={false}
                                    displayDataTypes={false}
                                    enableClipboard={true}
                                    onEdit={handleJsonChange}
                                    onAdd={handleJsonChange}
                                    onDelete={handleJsonChange}
                                    />
                            </div>
                            <input ref={secret_key} className='inp__' placeholder='Your secret key'/> 
                            <button onClick={prepsTheJsonFinalize} className='GenerateBtn btn'>Generate secure shareable link</button>
                        </>
                    }
                    {(isLoading) &&
                        <div className='displayfile'>
                            {!fileEncryptionDone ?
                                <div className='waiting flex flex-2 flex-dir'>
                                    <div class="loader"></div>
                                    <p className='wait'>Please wait, your data is being processed.</p>
                                </div>
                                :
                                <div className='displayFiles flex flex-dir gap16'>
                                    <div style={{ width: '100%', height: '20rem', overflowY: 'auto', padding: '1rem', border: '0.1rem solid var(--color-second)', borderRadius: '0.1rem' }}>
                                        <ReactJson
                                            src={{"encypted-Code" : encryptedFile}}
                                            theme="monokai" // or "bright:inverted" etc.
                                            style={{ fontSize: '16px' }}
                                            collapsed={false}
                                            displayDataTypes={false}
                                            enableClipboard={true}
                                        />
                                    </div>
                                    <Link to={`/secure/${encryptedFile}/${iv}`} className='visit link'>Preview link</Link>
                                    <input className='inp__' placeholder='receiver email id' type='text' />
                                    <button onClick={Sharing} className='sendbtn btn'>Send via mail</button>
                                </div>
                            }


                        </div>
                    }
                </>
            }


            {openDocs &&
               <FileProtect/>
            }

        </div>
    )
}

export default AddSecret;