import { defineStore } from "pinia"
import {api} from "boot/axios"
export const AddSettingsCounter= defineStore('addsettings',{
state: () =>{
    return{ 
        AddSettings:[] 
    }
},
actions: {
    getAddSettings(){
        api.get('AddSettings').then(
            (res)=>{
                this.AddSettings=res.data
            }
        ).then()
    }
}
})