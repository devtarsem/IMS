import {create} from 'zustand'

const dahStore = create(
    (set,get)=>({
        openNavsMini : false,
        setOpenNav : ()=>{
            set({openNavsMini : true})
        }
        ,
        setCloseNav : ()=>{
            set({openNavsMini : false})
        }
    })
)

export default dahStore;