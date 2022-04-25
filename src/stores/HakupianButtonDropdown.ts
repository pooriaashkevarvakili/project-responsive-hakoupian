import {defineStore} from "pinia"
import {api}  from 'boot/axios';
export const hakupianButtonDropdownCounter= defineStore('hakupianButtonDropdown',{
state: () =>{
    return{
        hakupianButtonDropdown:[]
    }
},
actions: {
    getHakupianButtonDropdown(){
        api.get('hakupianButtonDropdown').then(
            res=>{
                this.hakupianButtonDropdown=res.data
            }
        ).then()
    }
}
})