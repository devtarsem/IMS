import {create} from 'zustand'

const authLayerStore = create(
    (set)=>({
        addLayer : false,
        checkToAddLayer : async()=>{
            if(localStorage.getItem('auth_layer')){
                set({addLayer : true})
            }
        }
    })
)
export default authLayerStore;