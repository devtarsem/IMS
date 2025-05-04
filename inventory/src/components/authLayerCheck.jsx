import './../styles/authCheck.css'
import './../styles/media.css'
import { Link } from 'react-router';
import authLayerStore from '../store/authlayerCheck';
import { useEffect } from 'react';
import './../styles/media.css'


function AuthCheck(){

    const {addLayer,checkToAddLayer} = authLayerStore()

    useEffect(el=>{
        checkToAddLayer()
    }, [])

    return(
        <div className={!addLayer ? "authCheck flex flex-2 " : "authCheck zLess flex flex-2"}>
            <div className='flex flex-dir flex-2 gap16'>
                <h1 className='head_auth'>Please add security layer.</h1>
                <Link to='dashboard/home' className='btn redirect'>Add security layer</Link>
            </div>
        </div>
    )
}

export default AuthCheck;