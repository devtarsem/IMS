import share from './../icon/share.png'
import mark from './../icon/mark.png'
import del from './../icon/del.png'
import mySecretStore from '../store/mysecret'
import close from './../icon/close.png'
import { Link } from 'react-router'
import './../styles/media.css'


function AllprotectedFiles(){

    const {receivingProtectdFilesFromBackend, deleteProtectedFiles,closeFailedBookMarkPopUp, bookMarkFailed, bookMarkProtectedFiles} = mySecretStore();


    function bookMarkProtectedData (event, el){
        console.log(el)
        bookMarkProtectedFiles(el.url, el._id)
    }

    function bookMarkedPopClose(){
        closeFailedBookMarkPopUp()

    }

    function deleteProteFile(event,el){
        deleteProtectedFiles(el._id)
    }

    

    console.log(receivingProtectdFilesFromBackend)
    return(
        <div className="allSensitiveData flex flex-dir gap16">
            <div className={bookMarkFailed ? 'FailedBookmark flex flex-2 gap16' : 'FailedBookmark failedConceev flex flex-2 gap16'}>
                <p className='already'>This code is already bookmarked</p>
                <button onClick={bookMarkedPopClose} className='closebtn'>
                    <img src={close} className='icon_closing' alt='close'/>
                </button>
            </div>
            
            <h3 className='head3'>Your protected files</h3>
            <div className='displayprotefiles grid grid-2-col gap16'>
                {receivingProtectdFilesFromBackend.map(el=>
                    <div className="protectfile flex flex-dir gap16 pad16">
                        <p className="hashkey">Hashkey : - <span>{el.password.slice(0,10)}.....</span></p>
                        <a href={`${el.url}`} className="link_of_prot">Click here to see file</a>
                        <div className='flex gap16 flex-3'>
                            
                            <Link
                                to={`/protect/${JSON.parse(localStorage.getItem('auth')).id}/${el.identifier}}`}
                                className="linkpreview-"
                                >
                                <img src={share} className='icon_share' alt='share'/>

                            </Link>

                            
                            <button onClick={(event)=> bookMarkProtectedData(event, el)} className='shareBtn '>
                                <img src={mark} className='icon_share' alt='share'/>
                            </button>
                            <button onClick={(event)=> deleteProteFile(event, el)} className='shareBtn '>
                                <img src={del} className='icon_share' alt='share'/>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AllprotectedFiles;