import {create} from 'zustand';

const settingStore = create(
    (set)=>({
        userCreds : {},
        changeUsername : false,
        SettingError : false,
        settingErrorMsg : '',
        settingErroTrue : async(msg)=>{
            set({SettingError : true, settingErrorMsg : msg})
        }
        ,
        settingErrorFalse : async()=>{
            set({SettingError : false})
        }
        ,
        fetchingUserCreds : async()=>{
            if(localStorage.getItem('auth')){
                const auth = JSON.parse(localStorage.getItem('auth'));
                set({userCreds : auth});
            }
        }
        ,
        openUsernameResetOption : async()=>{
            set({changeUsername : true})
        }
        ,
        closeUsernameResetOption : async()=>{
            set({changeUsername : false})
        }
        ,
        renameTheUsername : async(name)=>{
            let auth = JSON.parse(localStorage.getItem('auth'));
            auth.name = name;
            localStorage.setItem('auth', JSON.stringify(auth));
            set({changeUsername : false})
            set({userCreds : auth});

        }
        
    })
)

export default settingStore;