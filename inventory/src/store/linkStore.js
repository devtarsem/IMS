import {create} from 'zustand';
import axios from 'axios';


const linkstore = create(
    (set)=>({
        passwordStatus : false,
        password : '',
        isLoading : false,
        contentToDisplay : {},
        lock: false,
        settingPasswordAndDecrypting : async(key, code, iv)=>{
            if(code === 'visited'){
                set({lock : true})
                return 0;
            }
            
            axios({
                method : "POST",
                url : "https://ims-back.onrender.com/api/v1/user-files/decrypt",
                data : {
                    key : key,
                    code : code,
                    iv : iv
                }
            }).then(el=>{
                if(el.data.status === 'Success'){
                    set({passwordStatus : true, isLoading : false, contentToDisplay : JSON.parse(JSON.parse(el.data.data.file))})
                    localStorage.setItem(`${code}`, true)
                }
            })
        }
        ,
        clearingDataAfterOncevisited : async(code)=>{
            
        }
    })
)

export default linkstore