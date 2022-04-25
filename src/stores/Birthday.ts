import {defineStore} from "pinia"
import {api}  from  "boot/axios"
export const birthdayCounter= defineStore('Birthday',{
    state: () =>{
        return{ 
            Birthday: []
        }
    },
    actions: {
        getBrithday(){
            api.get('Birthday').then(
                (res)=>{
                    this.Birthday=res.data
                }
            ).then(err=>console.log(err))
        }
    }
})