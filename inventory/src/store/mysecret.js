import {create} from 'zustand';
import axios from 'axios'

const mySecretStore = create(
    (set)=>({
        showSensitiveDataPanel : true,
        receivingProtectdFilesFromBackend : [],
        receivingSensitiveDataFromBackend : [],
        showSecurotuLayerPanel : false,
        decryptButtonSystem : false,
        bookMarkFailed : false,
        mySecertError : false,
        mySecretErrorMsg : '',
        isLoading : false,
        
        settingMySecretErroTrue : async(msg)=>{
            set({mySecertError : true, mySecretErrorMsg : msg})
        }
        ,
        settingMySecretErrorFalse : async()=>{
            set({mySecertError : false})
        }
        ,
        closeSensitiveDataPanelAndOpenFilePanel : async()=>{
            set({showSensitiveDataPanel : false})
        }
        ,
        openDataPanelAndCloseFilePanel : async()=>{
            set({showSensitiveDataPanel : true})
        }
        ,
        fetchingAllTheProtectedFiles : async()=>{
            set({isLoading : true})
            const auth = JSON.parse(localStorage.getItem('auth'))
            axios({
                method : "POST",
                url : "https://ims-back.onrender.com/api/v1/user-files/protected-files",
                data : {
                    id : auth.id,
                    pagistart : 1,
                    pagiend : 10
                }
            }).then(el=>{
                if(el.data.status == 'Success'){
                    set({isLoading : false ,receivingProtectdFilesFromBackend : el.data.data.files, receivingSensitiveDataFromBackend : el.data.data.sensitive})
                }
                console.log(el.data.data.sensitive)
            })
        }
        ,

        securityPanelANDDe_cyption : async()=>{
            set({showSecurotuLayerPanel : true})
        }

        ,

        closeSecurityPanel : async()=>{
            set({showSecurotuLayerPanel : false})
        }
        ,
        wrongPasswordMsg : '',
        checkingPassword : async(password)=>{
            const pass = JSON.parse(localStorage.getItem('auth_layer'));
            if(pass === password){
                set({decryptButtonSystem : true, showSecurotuLayerPanel : false})
            }else{
                set({wrongPasswordMsg : 'invalid password'})
            }
        }
        ,
        downTheWorngPaswordMsg : (str)=>{
            if(str.trim() == ''){
                set({wrongPasswordMsg : ''})
            }

        }
        ,

        descryptPassword : async(obj, allData)=>{
            axios({
                method : 'POST',
                url : 'https://ims-back.onrender.com/api/v1/user-files/derypt-asked',
                data : {
                    obj : obj,
                    id : JSON.parse(localStorage.getItem('auth')).id
                }
            }).then(el=>{
                if(el.data.status == 'Success'){
                    console.log(el.data.data)
                    allData.forEach(ele=>{
                        if(ele._id === el.data.data.mark){
                            ele.jsonString = el.data.data.data
                        }
                    })
                    set({receivingSensitiveDataFromBackend : allData})
                }
            })
        }

        ,

        bookMarksenitiveData : async(identity, code)=>{
            if(localStorage.getItem('sensiSECMORE')){
                const existingHash = JSON.parse(localStorage.getItem('sensiSECMORE'));
                console.log(existingHash)
                existingHash.forEach(el=>{
                    if(el.identity == identity){
                        set({bookMarkFailed : true})
                        return;
                    }
                })
                const newData = [...existingHash, {identity,code}]
                localStorage.setItem('sensiSECMORE', JSON.stringify(newData))
            }else{
                localStorage.setItem('sensiSECMORE', JSON.stringify([{identity,code}]))

            }
        }

        ,

        closeFailedBookMarkPopUp : async()=>{
            set({bookMarkFailed : false})

        }

        ,

        deleteHashSensitiveData : async(identity)=>{
            axios({
                method : 'POST',
                url : 'https://ims-back.onrender.com/api/v1/user-files/delete-sensitive-data',
                data : {
                    identity,
                    user_id : JSON.parse(localStorage.getItem('auth')).id
                }
            }).then(el=>{
                if(el.data.status === 'Success'){
                    set({receivingSensitiveDataFromBackend : el.data.data.updatedData})
                }
            })
        }

        ,

        bookMarkProtectedFiles : async(code,identity)=>{
            if(localStorage.getItem('proteSECMORE')){
                const existingHash = JSON.parse(localStorage.getItem('proteSECMORE'));
                existingHash.forEach(el=>{
                    if(el.identity == identity){
                        set({bookMarkFailed : true})
                        return;
                    }
                })
                const newData = [...existingHash, {identity,code}]
                localStorage.setItem('proteSECMORE', JSON.stringify(newData))
            }else{
                localStorage.setItem('proteSECMORE', JSON.stringify([{identity,code}]))

            }
        }

        ,

        deleteProtectedFiles : async(identity)=>{
            axios({
                method : 'POST',
                url : "https://ims-back.onrender.com/api/v1/user-files/delete-protected-files",
                data : {
                    identity,
                    user_id : JSON.parse(localStorage.getItem('auth')).id

                }
            }).then(el=>{
                if(el.data.status == 'Success'){
                    set({receivingProtectdFilesFromBackend : el.data.data.updatedData})
                }
            })
        }
    })
)

export default mySecretStore;