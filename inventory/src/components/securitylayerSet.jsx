import './../styles/security_layer.css'
import './../utils/util.css'
import dot from './../icon/dot.png'
import layerStore from '../store/securityLaterStore'
import {createRef, useEffect} from 'react';

function ExtraLayerOfSecurity(){

    const {setSecurityLayer, cacheLayerStatus, layerStatus, deActivateLayer} = layerStore();
    const password = createRef();

    useEffect(el=>{
        cacheLayerStatus();
    }, [])

    function SetLayerPasword(el){
        el.preventDefault();
        setSecurityLayer(password.current.value);
    }

    function Deactivate(){
        deActivateLayer();
    }

    return(
        <>
            {!layerStatus ?
                <div className="security pad16 flex flex-dir gap16">
                    <h2 className='head3 head2_ decenter'>Add extra security layer</h2>
                    <form className='layer layer_ flex flex-2 gap16 flex-dir'>
                        <div className='flex flex-2 gap16 flex-dir'>
                            <label className='label'>Enter security code</label>
                            <input  ref={password}  className='boxInp' type='password' placeholder='**********' />
                        </div>
                        <button onClick={SetLayerPasword} className='btn'>Add security layer</button>
                    </form>
                </div>
            :
                <div className='alreadyAdded security pad16 flex flex-dir gap16'>
                    <h2 className='head3 head2_ decenter'>Security layer activated</h2>
                    <button onClick={Deactivate} className='btn'>De-activate layer</button>
                </div>
            }
        </>
    )
}

export default ExtraLayerOfSecurity;