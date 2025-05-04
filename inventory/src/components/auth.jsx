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
import './../styles/media.css'


function Auth(){
    const {user,settingUpUser} = homestore();

    const loginWithGoogle = async()=>{
        const result = await signInWithPopup(auth, provider);
        settingUpUser(
            result.user.email,
            result.user.emailVerified,
            result.user.displayName
        )
      }


    return(
        <div className='auth flex flex-dir flex-2 gap16'>
            <h2 className='head2 head2_'>Complete authentication</h2>
            <div className='logsBox flex flex-dir gap16'>
                <button onClick={loginWithGoogle} className='btn flex flex-2 gap16'>
                    <img src={google} className='icon_auth' alt='icons'/>
                    conitnue with google
                </button>
                {/* <button className='btn flex flex-2 gap16'>
                    <img src={Microsoft} className='icon_auth' alt='icons'/>
                    conitnue with Microsoft
                </button>
                <button className='btn flex flex-2 gap16'>
                    <img src={apple} className='icon_auth' alt='icons'/>
                    conitnue with Apple
                </button> */}
            </div>
        </div>
    )
}

export default Auth;