import {create} from 'zustand';
import axios from 'axios';
import crypto from 'crypto-js'
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { storage } from './../firebase';

const secretStore = create(
    (set)=>({

        fileEncryptionDone : false,
        isLoading : false,
        isLoadingForProtectFFle : false,
        encryptedFile : '',
        iv : [],
        uploadedFileData : {},
        protectedFileReady : false,
        providedUrlFromBackend : ' ',
        newSecretError : false,
        newSecretErrorMsg : '',
        numCounter : 0,
        paswordCounter : 0,
        displayCounterNumberOfkeys : async(key)=>{
            set({numCounter : key.length})
        }
        ,
        displayCounterNumberOfkeysInPassword : async(key)=>{
            set({paswordCounter : key.length})
        }
        ,
        settingNewSecretErroTrue : async(msg)=>{
            set({newSecretError : true, newSecretErrorMsg : msg})
        }
        ,
        settingNewSecretErroFalse : async()=>{
            set({newSecretError : false})
        }
        ,
        sendingDataOfJSonPassword : (fileData)=>{
            set({isLoading : true})
            axios({
                method : 'POST',
                url : "http://127.0.0.1:3003/api/v1/user-files/secure",
                data : {
                    file : fileData,
                    id : JSON.parse(localStorage.getItem('auth')).id,
                }
            }).then(el=>{
                console.log(el.data)
                if(el.data.status === 'Success'){
                    set({fileEncryptionDone: true, encryptedFile : el.data.data.file, iv : [...el.data.data.iv]})
                }
            })
        }
        ,
        sendingCredentialsToReceiverViaMail : async(creds)=>{
            axios({
                method : 'POST',
                url : 'http://127.0.0.1:3003/api/v1/user-files/mail',
                data : {
                    credentials : creds
                }
            })
        }
        ,
        protectingFile : async(file, password, email)=>{
            set({isLoadingForProtectFFle : true})
            const foldername = JSON.parse(localStorage.getItem('auth')).id;
            const storageRef = ref(storage, `${foldername}/${file.name}.pdf`);
            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);
            
            axios({
                method : 'POST',
                url : 'http://127.0.0.1:3003/api/v1/user-files/protect-file',
                data : {
                    url : url,
                    password : password,
                    email : email
                }
            }).then(el=>{
                if(el.data.status == 'Success'){
                    set({protectedFileReady : true,uploadedFileData : {
                        url : url,
                        id : el.data.data.id,
                        identifier : el.data.data.identifier    
                    }})
                }
            })
        }

        ,


        passwordPassingToBAckendToPenFile : async(password, id, identifier)=>{
            axios({
                method : 'POST',
                url : "http://127.0.0.1:3003/api/v1/user-files/password-check-for-secure-file",
                data : {
                    password : password,
                    id : id,
                    identifier : identifier
                }
            }).then(el=>{
                if(el.data.status == 'Success'){
                    set({providedUrlFromBackend : el.data.data.url})
                }
            })
        }

        ,

        returnToInitialState : async()=>{
            set({protectedFileReady : false, isLoadingForProtectFFle : false})
        }

        ,

        returnToInitialStateInSensitiveDataComp : async()=>{
            set({isLoading : false, numCounter:0})
        }
    })
)

export default secretStore;