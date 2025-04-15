import {create} from 'zustand';
import axios from 'axios'

const homestore = create(
    (set)=>({
        user : false,
        settingUpUser : async(email,verify,name)=>{
            localStorage.setItem('auth', JSON.stringify({email, verify, name, id : ''}))
            
            axios({
                method : 'POST',
                url : "http://127.0.0.1:3003/api/v1/auth-user/auth",
                data : {
                    username : name,
                    email : email,
                    verify : verify,
                }
            }).then(el=>{
                if(el.data.status == 'Success'){
                    console.log(el.data.data.id);
                    const auth = JSON.parse(localStorage.getItem('auth'));
                    auth.id = el.data.data.id;
                    localStorage.setItem('auth', JSON.stringify(auth));
                }
            })
            
            set({user : true})
        },
        cachingUserAuth : async()=>{
            if(localStorage.getItem("auth")){
                const auth = JSON.parse(localStorage.getItem("auth"));
                if(auth.verify === true){
                    set({user : true})

                }else{
                    set({user : false})

                }
            }else{
                set({user : false})

            }
        }
    })
)
export default homestore;