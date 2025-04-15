import {create} from 'zustand';

const layerStore = create(
    (set)=>({
        layerStatus : false,
        setSecurityLayer : async(password)=>{
            localStorage.setItem('auth_layer', JSON.stringify(password))
            set({layerStatus : true})
        }
        
        ,

        cacheLayerStatus : async()=>{
            if(localStorage.getItem('auth_layer')){
                set({layerStatus : true})
            }else{
                set({layerStatus : false})
            }
        }

        ,

        deActivateLayer : async()=>{
            localStorage.removeItem('auth_layer');
            set({layerStatus : false})

        }

        
    })
)


export default layerStore;