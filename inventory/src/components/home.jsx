import './../styles/home.css'
import './../utils/util.css'

import homestore from '../store/homeStore'
import { useEffect } from 'react'
import Auth from './auth'
import ExtraLayerOfSecurity from './securitylayerSet'
import Error from './error'
import './../styles/media.css'


function Home(){

    const {user,settingUpUser, cachingUserAuth, homeError, errorMSG} = homestore();

    useEffect(el=>{
        cachingUserAuth()
    }, [])

    
    return(
        <div className="home">
            {homeError &&
                <Error msg={errorMSG} />
            }
            {!user &&
                <Auth/>
            }
            {user &&
                <div className=' flex flex-dir gap16 pad16'>
                    <h2 className='head2 head2_ decenter'>Add security layer</h2>
                    {/* <div className='daatana grid grid-5-col gap16'>
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
                    </div> */}
                    <div className='securityLayer grid grid-3-col'>
                        <ExtraLayerOfSecurity/>
                    </div>
                </div>
            }
        </div>
    )
}

export default Home;