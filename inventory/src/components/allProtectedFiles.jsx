import share from './../icon/share.png'
import mark from './../icon/mark.png'
import del from './../icon/del.png'
import mySecretStore from '../store/mysecret'

function AllprotectedFiles(){

    const {receivingProtectdFilesFromBackend} = mySecretStore();

    return(
        <div className="allSensitiveData flex flex-dir gap16">
            <h3 className='head3'>Your protected files</h3>
            <div className='grid grid-3-col gap16'>
                {receivingProtectdFilesFromBackend.map(el=>
                    <div className="protectfile flex flex-dir gap16 pad16">
                        <p className="hashkey">Hashkey : - <span>{el.password}</span></p>
                        <a href={`${el.url}`} className="link_of_prot">Click here to see file</a>
                        <div className='flex gap16'>
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
                )}
            </div>
        </div>
    )
}

export default AllprotectedFiles;