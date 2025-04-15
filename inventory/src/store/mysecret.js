import {create} from 'zustand';
import axios from 'axios'

const mySecretStore = create(
    (set)=>({
        showSensitiveDataPanel : true,
        receivingProtectdFilesFromBackend : [],
        receivingSensitiveDataFromBackend : [],
        showSecurotuLayerPanel : false,
        decryptButtonSystem : false,
        closeSensitiveDataPanelAndOpenFilePanel : async()=>{
            set({showSensitiveDataPanel : false})
        }
        ,
        openDataPanelAndCloseFilePanel : async()=>{
            set({showSensitiveDataPanel : true})
        }
        ,
        fetchingAllTheProtectedFiles : async()=>{
            const auth = JSON.parse(localStorage.getItem('auth'))
            axios({
                method : "POST",
                url : "http://127.0.0.1:3003/api/v1/user-files/protected-files",
                data : {
                    id : auth.id,
                    pagistart : 1,
                    pagiend : 10
                }
            }).then(el=>{
                if(el.data.status == 'Success'){
                    set({receivingProtectdFilesFromBackend : el.data.data.files, receivingSensitiveDataFromBackend : el.data.data.sensitive})
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

        checkingPassword : async(password)=>{
            const pass = JSON.parse(localStorage.getItem('auth_layer'));
            if(pass === password){
                set({decryptButtonSystem : true, showSecurotuLayerPanel : false})
            }
        }
        ,

        descryptPassword : async(obj, allData)=>{
            axios({
                method : 'POST',
                url : 'http://127.0.0.1:3003/api/v1/user-files/derypt-asked',
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
    })
)

export default mySecretStore;