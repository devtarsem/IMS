import './../styles/home.css'
import './../utils/util.css'
import google from './../icon/google.png'
import Microsoft from './../icon/Microsoft.png'
import apple from './../icon/apple.png'
import { storage } from './../firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { getAuth } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth';
import {auth, provider} from './../firebase';
import homestore from '../store/homeStore'
import { useEffect } from 'react'
import Auth from './auth'
import ExtraLayerOfSecurity from './securitylayerSet'

function Home(){

    const {user,settingUpUser, cachingUserAuth} = homestore();

    useEffect(el=>{
        cachingUserAuth()
    }, [])

    
    return(
        <div className="home">
            {!user &&
                <Auth/>
            }
            {user &&
                <div className=' flex flex-dir gap16'>
                    <h2 className='head2 head2_ decenter'>Analyze the latest usage</h2>
                    <div className='grid grid-5-col gap16'>
                        <div className='content green flex flex-dir gap16 pad16'>
                            <h3 className='head3'>Set extra security layer</h3>
                            <button className='extraBtn'>Add layer</button>
                        </div>
                        <div className='content green flex flex-dir gap16 pad16'>
                            <h3 className='head3'>Total received</h3>
                            <p className='number'>586</p>
                        </div>
                        <div className='content orange flex flex-dir gap16 pad16'>
                            <h3 className='head3'>Total sended</h3>
                            <p className='number'>483</p>
                        </div>
                        <div className='content voilet flex flex-dir gap16 pad16'>
                            <h3 className='head3'>Total exports</h3>
                            <p className='number'>147</p>
                        </div>
                    </div>
                    <div className='securityLayer grid grid-3-col'>
                        <ExtraLayerOfSecurity/>
                    </div>
                </div>
            }
        </div>
    )
}

export default Home;