import {defineStore} from 'pinia'
import {api} from 'boot/axios'
export const AddSettingsOneCounter= defineStore('addSettingsOne',{
    state:()=>{
        return{
            AddSettingsOne:[]
        }
    },
    actions:{
        getAddSettingsOne(){
            api.get('AddSettingsOne').then(
                res=>{
                this.AddSettingsOne=res.data
                }
            ).then()
        }
    }
})